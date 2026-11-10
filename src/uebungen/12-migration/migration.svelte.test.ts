import { createRawSnippet, flushSync, mount, unmount } from 'svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { euro, sampleProducts } from '#lib/shop.js';
import AddToCart from './loesung/AddToCart.svelte';
import source from './loesung/AddToCart.svelte?raw';

const [hammer] = sampleProducts;

describe('12 Migration – AddToCart', () => {
	let app: ReturnType<typeof mount> | undefined;
	afterEach(() => {
		if (app) unmount(app);
		document.body.innerHTML = '';
	});

	const setup = (props: Record<string, unknown> = {}) => {
		const onadd = vi.fn();
		app = mount(AddToCart, { target: document.body, props: { product: hammer, onadd, ...props } });
		flushSync();
		const click = (label: string) => {
			const button = [...document.body.querySelectorAll('button')].find(
				(b) => b.getAttribute('aria-label') === label || b.textContent === label
			)!;
			button.click();
			flushSync();
		};
		return { onadd, click };
	};

	it('behaves as before: quantity and total', () => {
		const ui = setup();
		ui.click('Menge erhöhen');
		ui.click('Menge erhöhen');
		expect(document.body.querySelector('[data-testid="menge"]')?.textContent).toBe('3');
		expect(document.body.querySelector('p')?.textContent).toBe(`Summe: ${euro(3 * hammer.priceCents)}`);
	});

	it('reports adding via the callback prop onadd', () => {
		const ui = setup();
		ui.click('Menge erhöhen');
		ui.click('In den Warenkorb');
		expect(ui.onadd).toHaveBeenCalledWith({ product: hammer, quantity: 2 });
	});

	it('renders the hint as a snippet', () => {
		const hint = createRawSnippet(() => ({ render: () => '<small>Lieferbar in 2 Tagen</small>' }));
		setup({ hint });
		expect(document.body.querySelector('small')?.textContent).toBe('Lieferbar in 2 Tagen');
	});

	it('uses Svelte 5 syntax only', () => {
		for (const legacy of ['runes={false}', 'export let', '$:', 'on:click', 'createEventDispatcher', '<slot']) {
			expect(source, legacy).not.toContain(legacy);
		}
	});
});
