import { flushSync } from 'svelte';
import { describe, expect, it } from 'vitest';
import { sampleProducts } from '#lib/shop.js';
import { Cart } from './loesung/cart.svelte.js';
import { Catalog } from './loesung/catalog.svelte.js';

const [hammer, schrauber] = sampleProducts;

/** Runs `read` in an effect and collects every result. */
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

describe('02 State – Cart', () => {
	it('adds a new line item with quantity 1 and price', () => {
		const cart = new Cart();
		cart.add(hammer);
		expect(cart.snapshot()).toEqual([
			{ productId: hammer.id, quantity: 1, priceCents: hammer.priceCents }
		]);
	});

	it('increases the quantity if the product is already in the cart', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(schrauber);
		cart.add(hammer);
		expect(cart.items.map((i) => [i.productId, i.quantity])).toEqual([
			[hammer.id, 2],
			[schrauber.id, 1]
		]);
	});

	it('reports push as a change (deep state)', () => {
		const cart = new Cart();
		const { seen, stop } = track(() => cart.items.length);
		cart.add(hammer);
		flushSync();
		expect(seen).toEqual([0, 1]);
		stop();
	});

	it('also reports quantity += 1 as a change', () => {
		const cart = new Cart();
		cart.add(hammer);
		const { seen, stop } = track(() => cart.items[0]?.quantity);
		cart.add(hammer);
		flushSync();
		expect(seen).toEqual([1, 2]);
		stop();
	});

	it('returns a copy via snapshot that structuredClone can handle', () => {
		const cart = new Cart();
		cart.add(hammer);
		const copy = structuredClone(cart.snapshot());
		expect(copy[0]?.quantity).toBe(1);
	});
});

describe('02 State – Catalog with $state.raw', () => {
	it('reacts when the list is replaced', () => {
		const catalog = new Catalog();
		const { seen, stop } = track(() => catalog.products.length);
		catalog.replace(structuredClone(sampleProducts));
		flushSync();
		expect(seen).toEqual([0, sampleProducts.length]);
		stop();
	});

	it('does not wrap the products in a proxy', () => {
		const catalog = new Catalog();
		catalog.replace(structuredClone(sampleProducts));
		const { seen, stop } = track(() => catalog.products[0]?.stock);
		catalog.products[0]!.stock = 0; // mutate instead of replace – deliberately without effect
		flushSync();
		expect(seen).toEqual([hammer.stock]);
		stop();
	});
});
