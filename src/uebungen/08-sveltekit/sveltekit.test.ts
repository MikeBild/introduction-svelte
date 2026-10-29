import { isActionFailure, isHttpError, isRedirect } from '@sveltejs/kit';
import { beforeEach, describe, expect, it } from 'vitest';
import { db } from '#lib/server/db.js';
import { sampleProducts } from '#lib/shop.js';
import { loadOrder, loadProducts, placeOrder } from './loesung/orders.server.js';

const [hammer, , wasserwaage] = sampleProducts;

const post = (fields: Record<string, string>) => {
	const body = new FormData();
	for (const [key, value] of Object.entries(fields)) body.set(key, value);
	return { request: new Request('http://localhost/orders', { method: 'POST', body }) };
};

/** Führt die Action aus und liefert entweder das Ergebnis oder den geworfenen Wert. */
const run = async (fields: Record<string, string>) => {
	try {
		return { result: await placeOrder(post(fields)) };
	} catch (thrown) {
		return { thrown };
	}
};

beforeEach(() => db.reset());

describe('08 SvelteKit – load', () => {
	it('lädt die Produkte', async () => {
		const { products } = await loadProducts();
		expect(products.map((p) => p.id)).toEqual(sampleProducts.map((p) => p.id));
	});

	it('meldet eine unbekannte Bestellung als 404', async () => {
		const thrown = await loadOrder({ params: { id: 'o-404' } }).catch((e: unknown) => e);
		expect(isHttpError(thrown, 404)).toBe(true);
		expect(isHttpError(thrown) && thrown.body.message).toBe('Diese Bestellung gibt es nicht. Wähle eine aus der Bestellliste.');
	});
});

describe('08 SvelteKit – Form Action bestellen', () => {
	it('lehnt ungültige Eingaben mit 400 ab', async () => {
		const { result } = await run({ customerId: 'c-1', productId: hammer.id, quantity: '0' });
		expect(isActionFailure(result)).toBe(true);
		expect(result).toMatchObject({ status: 400, data: { error: 'Wähle ein Produkt und eine Menge ab 1.' } });
	});

	it('lehnt fehlenden Bestand mit 409 ab', async () => {
		const { result } = await run({ customerId: 'c-1', productId: wasserwaage.id, quantity: '1' });
		expect(isActionFailure(result)).toBe(true);
		expect(result).toMatchObject({ status: 409, data: { error: 'Zu wenig auf Lager. Wähle eine kleinere Menge oder ein anderes Produkt.' } });
	});

	it('legt die Bestellung an und leitet mit 303 weiter', async () => {
		const { thrown } = await run({ customerId: 'c-1', productId: hammer.id, quantity: '2' });
		expect(isRedirect(thrown)).toBe(true);
		expect(isRedirect(thrown) && [thrown.status, thrown.location]).toEqual([303, '/orders/o-1']);

		const { order } = await loadOrder({ params: { id: 'o-1' } });
		expect(order.items).toEqual([
			{ productId: hammer.id, quantity: 2, priceCents: hammer.priceCents }
		]);
		const { products } = await loadProducts();
		expect(products.find((p) => p.id === hammer.id)?.stock).toBe(hammer.stock - 2);
	});
});
