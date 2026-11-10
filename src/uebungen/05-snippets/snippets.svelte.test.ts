import { createRawSnippet, flushSync, mount, unmount } from 'svelte';
import { afterEach, describe, expect, it } from 'vitest';
import { euro, sampleProducts, type Product } from '#lib/shop.js';
import ProductTable from './loesung/ProductTable.svelte';
import PriceList from './loesung/PriceList.svelte';

let app: ReturnType<typeof mount> | undefined;
afterEach(() => {
	if (app) unmount(app);
	app = undefined;
	document.body.innerHTML = '';
});

const row = createRawSnippet((product: () => Product) => ({
	render: () => `<td>${product().name}</td>`
}));
const empty = createRawSnippet(() => ({ render: () => '<span>leer</span>' }));

const cells = () =>
	[...document.body.querySelectorAll('tr')].map((tr) =>
		[...tr.querySelectorAll('td')].map((td) => td.textContent)
	);

describe('05 Snippets – ProductTable', () => {
	it('renders the row snippet for each product', () => {
		app = mount(ProductTable, { target: document.body, props: { products: sampleProducts, row } });
		flushSync();
		expect(cells()).toEqual(sampleProducts.map((p) => [p.name]));
	});

	it('renders empty for an empty list', () => {
		app = mount(ProductTable, { target: document.body, props: { products: [], row, empty } });
		flushSync();
		expect(document.body.querySelector('td span')?.textContent).toBe('leer');
	});

	it('stays stable without an empty snippet', () => {
		app = mount(ProductTable, { target: document.body, props: { products: [], row } });
		flushSync();
		expect(document.body.querySelectorAll('tr')).toHaveLength(1);
	});
});

describe('05 Snippets – PriceList as the caller', () => {
	it('provides name and price per row', () => {
		app = mount(PriceList, { target: document.body, props: { products: sampleProducts } });
		flushSync();
		expect(cells()).toEqual(sampleProducts.map((p) => [p.name, euro(p.priceCents)]));
	});

	it('shows a hint when there is nothing', () => {
		app = mount(PriceList, { target: document.body, props: { products: [] } });
		flushSync();
		expect(document.body.querySelector('td')?.textContent).toBe('Keine Produkte gefunden');
	});
});
