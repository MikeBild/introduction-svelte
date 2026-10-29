import { flushSync, mount, unmount } from 'svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { PlaceOrderInput } from '#lib/schema.js';
import { sampleProducts } from '#lib/shop.js';
import CheckoutForm from './loesung/CheckoutForm.svelte';

describe('09 Formulare – CheckoutForm', () => {
	let app: ReturnType<typeof mount> | undefined;
	afterEach(() => {
		if (app) unmount(app);
		document.body.innerHTML = '';
	});

	const setup = () => {
		const onorder = vi.fn<(input: PlaceOrderInput) => void>();
		app = mount(CheckoutForm, { target: document.body, props: { products: sampleProducts, onorder } });
		flushSync();
		const quantity = document.body.querySelector<HTMLInputElement>('#quantity')!;
		const form = document.body.querySelector('form')!;
		const type = (value: string) => {
			quantity.value = value;
			quantity.dispatchEvent(new Event('input', { bubbles: true }));
			flushSync();
		};
		const submit = () => {
			const event = new Event('submit', { bubbles: true, cancelable: true });
			form.dispatchEvent(event);
			flushSync();
			return event;
		};
		return { onorder, quantity, type, submit };
	};

	it('verhindert das Neuladen der Seite', () => {
		const ui = setup();
		expect(ui.submit().defaultPrevented).toBe(true);
	});

	it('meldet gültige Eingaben mit dem Schema-Typ', () => {
		const ui = setup();
		ui.type('3');
		ui.submit();
		expect(ui.onorder).toHaveBeenCalledWith({
			customerId: 'c-1',
			items: [{ productId: 'p-1', quantity: 3 }]
		});
	});

	it('zeigt den Fehler am Feld und meldet nichts', () => {
		const ui = setup();
		ui.type('0');
		ui.submit();
		expect(ui.onorder).not.toHaveBeenCalled();
		expect(ui.quantity.getAttribute('aria-invalid')).toBe('true');
		expect(ui.quantity.getAttribute('aria-describedby')).toBe('quantity-error');
		expect(document.getElementById('quantity-error')?.textContent).toBe('Bitte eine ganze Zahl ab 1');
	});

	it('entfernt den Fehler nach einer gültigen Eingabe', () => {
		const ui = setup();
		ui.type('0');
		ui.submit();
		ui.type('2');
		ui.submit();
		expect(ui.quantity.hasAttribute('aria-invalid')).toBe(false);
		expect(document.getElementById('quantity-error')).toBeNull();
	});
});
