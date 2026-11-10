import { flushSync, mount, unmount } from 'svelte';
import { describe, expect, it } from 'vitest';
import { sampleProducts } from '#lib/shop.js';
import { Cart } from './loesung/cart.svelte.js';
import { ProductFilter } from './loesung/product-filter.svelte.js';
import CartTitle from './loesung/CartTitle.svelte';

const [hammer, schrauber, wasserwaage, akkuschrauber] = sampleProducts;

describe('03 Deriving – Cart', () => {
	it('computes total and count', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(hammer);
		cart.add(schrauber);
		expect(cart.total).toBe(2 * hammer.priceCents + schrauber.priceCents);
		expect(cart.count).toBe(3);
	});

	it('recomputes after removing', () => {
		const cart = new Cart();
		cart.add(hammer);
		cart.add(schrauber);
		cart.remove(hammer.id);
		expect(cart.items.map((i) => i.productId)).toEqual([schrauber.id]);
		expect(cart.total).toBe(schrauber.priceCents);
		expect(cart.count).toBe(1);
	});
});

describe('03 Deriving – ProductFilter with $derived.by', () => {
	it('shows all products without a search', () => {
		const filter = new ProductFilter(() => sampleProducts);
		expect(filter.visible).toHaveLength(sampleProducts.length);
	});

	it('filters by name, case-insensitive', () => {
		const filter = new ProductFilter(() => sampleProducts);
		filter.query = '  SCHRAUB ';
		expect(filter.visible.map((p) => p.id)).toEqual([schrauber.id, akkuschrauber.id]);
	});

	it('hides sold-out products on request', () => {
		const filter = new ProductFilter(() => sampleProducts);
		filter.onlyInStock = true;
		expect(filter.visible.map((p) => p.id)).not.toContain(wasserwaage.id);
		expect(filter.visible).toHaveLength(3);
	});
});

describe('03 Effects – CartTitle', () => {
	it('keeps the tab title up to date', () => {
		const cart = new Cart();
		const app = mount(CartTitle, { target: document.body, props: { cart } });
		flushSync();
		expect(document.title).toBe('Warenkorb (0)');
		cart.add(hammer);
		cart.add(hammer);
		flushSync();
		expect(document.title).toBe('Warenkorb (2)');
		unmount(app);
	});
});
