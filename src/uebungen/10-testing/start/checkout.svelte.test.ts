import { cleanup, render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, it, vi } from 'vitest';
import { sampleProducts } from '#lib/shop.js';
import CheckoutForm from '#uebungen/09-formulare/loesung/CheckoutForm.svelte';

afterEach(() => cleanup());

const setup = () => {
	const user = userEvent.setup();
	const onorder = vi.fn();
	render(CheckoutForm, { products: sampleProducts, onorder });
	return { user, onorder };
};

it('orders the selected product in the entered quantity', async () => {
	const { user, onorder } = setup();
	// TODO 1: Use `user.selectOptions(screen.getByLabelText('Produkt'), 'Akkuschrauber')` to select
	//         a product, type the quantity 2 into the field “Menge” (quantity), and click “Bestellen” (order).
	//         Expect `onorder` to have been called with `{ customerId: 'c-1', items: [{ productId: 'p-4', quantity: 2 }] }`.
	void user;
	void onorder;
	expect.unreachable('TODO 1 ist noch offen');
});

it('shows an invalid quantity at the field', async () => {
	const { user, onorder } = setup();
	// TODO 2: Type the quantity 0 and click “Bestellen”. Expect:
	//         - `onorder` was not called
	//         - the field has `aria-invalid="true"`
	//         - `aria-describedby` points to the message “Gib eine ganze Zahl ab 1 ein.” (enter a whole number of at least 1)
	void user;
	void onorder;
	void screen;
	expect.unreachable('TODO 2 ist noch offen');
});

it('reports an empty field as an error', async () => {
	// TODO 3: Clear the field “Menge” with `user.clear`, submit the form, and
	//         check that the message appears and `onorder` was not called.
	setup();
	expect.unreachable('TODO 3 ist noch offen');
});
