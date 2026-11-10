import { flushSync, mount, unmount } from 'svelte';
import { get } from 'svelte/store';
import { afterEach, describe, expect, it } from 'vitest';
import { Cart } from '#lib/cart.svelte.js';
import { euro, sampleProducts } from '#lib/shop.js';
import { online } from './loesung/online.js';
import CartBadge from './loesung/CartBadge.svelte';
import CartHarness from './CartHarness.svelte';

const [hammer] = sampleProducts;

const setOnline = (value: boolean) => {
	Object.defineProperty(navigator, 'onLine', { value, configurable: true });
	window.dispatchEvent(new Event(value ? 'online' : 'offline'));
	flushSync();
};

let app: ReturnType<typeof mount> | undefined;
afterEach(() => {
	if (app) unmount(app);
	app = undefined;
	document.body.innerHTML = '';
	setOnline(true);
});

describe('06 Shared state – Context', () => {
	it('reads the cart from the Context', () => {
		const cart = new Cart();
		cart.add(hammer);
		app = mount(CartHarness, { target: document.body, props: { cart } });
		flushSync();
		expect(document.body.querySelector('a')?.textContent).toBe(
			`Warenkorb (1) · ${euro(hammer.priceCents)}`
		);
	});

	it('updates when the shared cart changes', () => {
		const cart = new Cart();
		app = mount(CartHarness, { target: document.body, props: { cart } });
		cart.add(hammer);
		cart.add(hammer);
		flushSync();
		expect(document.body.querySelector('a')?.textContent).toContain('Warenkorb (2)');
	});

	it('throws without a provided cart', () => {
		expect(() => mount(CartBadge, { target: document.body })).toThrow();
	});
});

describe('06 Shared state – online store', () => {
	it('follows navigator.onLine and the window events', () => {
		const seen: boolean[] = [];
		const stop = online.subscribe((value) => seen.push(value));
		setOnline(false);
		setOnline(true);
		stop();
		expect(seen).toEqual([true, false, true]);
	});

	it('reads the current value on subscribe', () => {
		Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
		expect(get(online)).toBe(false);
	});

	it('shows an offline notice in the badge', () => {
		app = mount(CartHarness, { target: document.body, props: { cart: new Cart() } });
		flushSync();
		expect(document.body.querySelector('[role="status"]')).toBeNull();
		setOnline(false);
		expect(document.body.querySelector('[role="status"]')?.textContent).toContain('Offline');
	});
});
