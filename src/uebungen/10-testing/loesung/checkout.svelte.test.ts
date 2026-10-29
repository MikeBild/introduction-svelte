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
	const quantity = screen.getByLabelText('Menge');
	const submit = screen.getByRole('button', { name: 'Bestellen' });
	return { user, onorder, quantity, submit };
};

it('bestellt das gewählte Produkt in der eingegebenen Menge', async () => {
	const { user, onorder, quantity, submit } = setup();

	await user.selectOptions(screen.getByLabelText('Produkt'), 'Akkuschrauber');
	await user.clear(quantity);
	await user.type(quantity, '2');
	await user.click(submit);

	expect(onorder).toHaveBeenCalledWith({
		customerId: 'c-1',
		items: [{ productId: 'p-4', quantity: 2 }]
	});
});

it('zeigt eine ungültige Menge am Feld', async () => {
	const { user, onorder, quantity, submit } = setup();

	await user.clear(quantity);
	await user.type(quantity, '0');
	await user.click(submit);

	expect(onorder).not.toHaveBeenCalled();
	expect(quantity.getAttribute('aria-invalid')).toBe('true');
	const message = screen.getByText('Bitte eine ganze Zahl ab 1');
	expect(quantity.getAttribute('aria-describedby')).toBe(message.id);
});

it('meldet ein leeres Feld als Fehler', async () => {
	const { user, onorder, quantity, submit } = setup();

	await user.clear(quantity);
	await user.click(submit);

	expect(onorder).not.toHaveBeenCalled();
	expect(screen.getByText('Bitte eine ganze Zahl ab 1')).toBeTruthy();
});
