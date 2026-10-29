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

describe('06 Geteilter Zustand – Context', () => {
	it('liest den Warenkorb aus dem Context', () => {
		const cart = new Cart();
		cart.add(hammer);
		app = mount(CartHarness, { target: document.body, props: { cart } });
		flushSync();
		expect(document.body.querySelector('a')?.textContent).toBe(
			`Warenkorb (1) · ${euro(hammer.priceCents)}`
		);
	});

	it('aktualisiert sich, wenn sich der geteilte Warenkorb ändert', () => {
		const cart = new Cart();
		app = mount(CartHarness, { target: document.body, props: { cart } });
		cart.add(hammer);
		cart.add(hammer);
		flushSync();
		expect(document.body.querySelector('a')?.textContent).toContain('Warenkorb (2)');
	});

	it('wirft ohne bereitgestellten Warenkorb', () => {
		expect(() => mount(CartBadge, { target: document.body })).toThrow();
	});
});

describe('06 Geteilter Zustand – Store online', () => {
	it('folgt navigator.onLine und den window-Events', () => {
		const seen: boolean[] = [];
		const stop = online.subscribe((value) => seen.push(value));
		setOnline(false);
		setOnline(true);
		stop();
		expect(seen).toEqual([true, false, true]);
	});

	it('liest beim Abonnieren den aktuellen Wert', () => {
		Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
		expect(get(online)).toBe(false);
	});

	it('zeigt im Badge einen Offline-Hinweis', () => {
		app = mount(CartHarness, { target: document.body, props: { cart: new Cart() } });
		flushSync();
		expect(document.body.querySelector('[role="status"]')).toBeNull();
		setOnline(false);
		expect(document.body.querySelector('[role="status"]')?.textContent).toContain('Offline');
	});
});
