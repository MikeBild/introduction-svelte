import { flushSync } from 'svelte';
import { describe, expect, it } from 'vitest';
import { sampleProducts } from '#lib/shop.js';
import { Cart } from './loesung/cart.svelte.js';
import { Catalog } from './loesung/catalog.svelte.js';

const [hammer, schrauber] = sampleProducts;

/** Führt `read` in einem Effekt aus und sammelt jedes Ergebnis. */
function track<T>(read: () => T) {
	const seen: T[] = [];
	const stop = $effect.root(() => {
		$effect(() => {
			seen.push(read());
		});
	});
	flushSync();
	return { seen, stop };
}

describe('02 Zustand – Cart', () => {
	it('legt eine neue Position mit Menge 1 und Preis an', () => {
		const cart = new Cart();
		cart.add(hammer);
		expect(cart.snapshot()).toEqual([
			{ productId: hammer.id, quantity: 1, priceCents: hammer.priceCents }
		]);
	});

	it('erhöht die Menge, wenn das Produkt schon im Warenkorb liegt', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(schrauber);
		cart.add(hammer);
		expect(cart.items.map((i) => [i.productId, i.quantity])).toEqual([
			[hammer.id, 2],
			[schrauber.id, 1]
		]);
	});

	it('meldet push als Änderung (Deep State)', () => {
		const cart = new Cart();
		const { seen, stop } = track(() => cart.items.length);
		cart.add(hammer);
		flushSync();
		expect(seen).toEqual([0, 1]);
		stop();
	});

	it('meldet auch quantity += 1 als Änderung', () => {
		const cart = new Cart();
		cart.add(hammer);
		const { seen, stop } = track(() => cart.items[0]?.quantity);
		cart.add(hammer);
		flushSync();
		expect(seen).toEqual([1, 2]);
		stop();
	});

	it('liefert mit snapshot eine Kopie, die structuredClone verträgt', () => {
		const cart = new Cart();
		cart.add(hammer);
		const copy = structuredClone(cart.snapshot());
		expect(copy[0]?.quantity).toBe(1);
	});
});

describe('02 Zustand – Catalog mit $state.raw', () => {
	it('reagiert auf das Ersetzen der Liste', () => {
		const catalog = new Catalog();
		const { seen, stop } = track(() => catalog.products.length);
		catalog.replace(structuredClone(sampleProducts));
		flushSync();
		expect(seen).toEqual([0, sampleProducts.length]);
		stop();
	});

	it('hüllt die Produkte nicht in einen Proxy', () => {
		const catalog = new Catalog();
		catalog.replace(structuredClone(sampleProducts));
		const { seen, stop } = track(() => catalog.products[0]?.stock);
		catalog.products[0]!.stock = 0; // verändern statt ersetzen – bewusst ohne Wirkung
		flushSync();
		expect(seen).toEqual([hammer.stock]);
		stop();
	});
});
