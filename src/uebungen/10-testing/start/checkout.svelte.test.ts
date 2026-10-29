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

it('bestellt das gewählte Produkt in der eingegebenen Menge', async () => {
	const { user, onorder } = setup();
	// TODO 1: Wähle mit `user.selectOptions(screen.getByLabelText('Produkt'), 'Akkuschrauber')`
	//         ein Produkt, tippe die Menge 2 ins Feld „Menge“ und klicke auf „Bestellen“.
	//         Erwarte, dass `onorder` mit `{ customerId: 'c-1', items: [{ productId: 'p-4', quantity: 2 }] }` aufgerufen wurde.
	void user;
	void onorder;
	expect.unreachable('TODO 1 ist noch offen');
});

it('zeigt eine ungültige Menge am Feld', async () => {
	const { user, onorder } = setup();
	// TODO 2: Tippe die Menge 0 und klicke auf „Bestellen“. Erwarte:
	//         - `onorder` wurde nicht aufgerufen
	//         - das Feld hat `aria-invalid="true"`
	//         - `aria-describedby` zeigt auf die Meldung „Gib eine ganze Zahl ab 1 ein.“
	void user;
	void onorder;
	void screen;
	expect.unreachable('TODO 2 ist noch offen');
});

it('meldet ein leeres Feld als Fehler', async () => {
	// TODO 3: Leere das Feld „Menge“ mit `user.clear`, schick das Formular ab und
	//         prüfe, dass die Meldung erscheint und `onorder` nicht aufgerufen wurde.
	setup();
	expect.unreachable('TODO 3 ist noch offen');
});
