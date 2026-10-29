import { createRawSnippet, flushSync, mount, unmount } from 'svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { sampleProducts, type Product } from '#lib/shop.js';
import ProductCard from './loesung/ProductCard.svelte';
import ProductSearch from './loesung/ProductSearch.svelte';
import QuantityHarness from './QuantityHarness.svelte';

const [hammer, , wasserwaage] = sampleProducts;
const apps: ReturnType<typeof mount>[] = [];
const show = (app: ReturnType<typeof mount>) => {
	apps.push(app);
	flushSync();
	return document.body;
};
const target = document.body;
afterEach(() => {
	apps.splice(0).forEach((app) => unmount(app));
	document.body.innerHTML = '';
});

const type = (input: HTMLInputElement, value: string) => {
	input.value = value;
	input.dispatchEvent(new Event('input', { bubbles: true }));
	flushSync();
};

describe('04 Props – ProductCard', () => {
	it('zeigt Name und Preis', () => {
		const body = show(mount(ProductCard, { target, props: { product: hammer, onadd: () => {} } }));
		expect(body.querySelector('h3')?.textContent).toBe('Hammer');
		expect(body.querySelector('p')?.textContent).toContain('19,90');
	});

	it('meldet den Klick über die Callback-Prop onadd', () => {
		const onadd = vi.fn<(product: Product) => void>();
		const body = show(mount(ProductCard, { target, props: { product: hammer, onadd } }));
		body.querySelector('button')!.click();
		expect(onadd).toHaveBeenCalledWith(hammer);
	});

	it('deaktiviert den Button bei Bestand 0', () => {
		const body = show(mount(ProductCard, { target, props: { product: wasserwaage, onadd: () => {} } }));
		expect(body.querySelector('button')!.disabled).toBe(true);
	});

	it('rendert children', () => {
		const children = createRawSnippet(() => ({ render: () => '<small>Ausverkauft</small>' }));
		const body = show(mount(ProductCard, { target, props: { product: wasserwaage, onadd: () => {}, children } }));
		expect(body.querySelector('small')?.textContent).toBe('Ausverkauft');
	});
});

describe('04 Props – QuantityInput mit $bindable', () => {
	it('gibt die Eingabe an den Aufrufer zurück', () => {
		const body = show(mount(QuantityHarness, { target }));
		type(body.querySelector('input')!, '3');
		expect(body.querySelector('p')?.textContent).toBe('Gewählt: 3');
	});
});

describe('04 Bindings – ProductSearch', () => {
	it('filtert über das gebundene Suchfeld', () => {
		const body = show(mount(ProductSearch, { target, props: { products: sampleProducts, onadd: () => {} } }));
		expect(body.querySelector('p')?.textContent).toBe('4 Treffer');
		type(body.querySelector('input[placeholder="Suchen"]')!, 'schraub');
		expect(body.querySelector('p')?.textContent).toBe('2 Treffer');
	});

	it('blendet über die Checkbox Ausverkauftes aus', () => {
		const body = show(mount(ProductSearch, { target, props: { products: sampleProducts, onadd: () => {} } }));
		body.querySelector<HTMLInputElement>('input[type="checkbox"]')!.click();
		flushSync();
		expect(body.querySelector('p')?.textContent).toBe('3 Treffer');
	});
});
