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

	it('verhält sich wie vorher: Menge und Summe', () => {
		const ui = setup();
		ui.click('mehr');
		ui.click('mehr');
		expect(document.body.querySelector('[data-testid="menge"]')?.textContent).toBe('3');
		expect(document.body.querySelector('p')?.textContent).toBe(`Summe: ${euro(3 * hammer.priceCents)}`);
	});

	it('meldet das Hinzufügen über die Callback-Prop onadd', () => {
		const ui = setup();
		ui.click('mehr');
		ui.click('In den Warenkorb');
		expect(ui.onadd).toHaveBeenCalledWith({ product: hammer, quantity: 2 });
	});

	it('rendert den Hinweis als Snippet', () => {
		const hint = createRawSnippet(() => ({ render: () => '<small>Lieferbar in 2 Tagen</small>' }));
		setup({ hint });
		expect(document.body.querySelector('small')?.textContent).toBe('Lieferbar in 2 Tagen');
	});

	it('nutzt nur noch Svelte-5-Syntax', () => {
		for (const legacy of ['runes={false}', 'export let', '$:', 'on:click', 'createEventDispatcher', '<slot']) {
			expect(source, legacy).not.toContain(legacy);
		}
	});
});
