// Load-Funktionen und Form Action für die Routen unter src/routes.
// Die Routen-Dateien (+page.server.ts) rufen diese Funktionen nur auf.
import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '#lib/server/db.js';
import { PlaceOrderInput } from '#lib/schema.js';

/** load für /products */
export async function loadProducts() {
	return { products: await db.products() };
}

/** load für /orders */
export async function loadOrders() {
	return { orders: await db.orders(), products: await db.products() };
}

/** load für /orders/[id] – unbekannte IDs werden zu 404 */
export async function loadOrder({ params }: { params: { id: string } }) {
	const order = await db.order(params.id);
	if (!order) error(404, 'Diese Bestellung gibt es nicht. Wähle eine aus der Bestellliste.');
	return { order };
}

/** Form Action „bestellen“ für /orders */
export async function placeOrder({ request }: { request: Request }) {
	const form = await request.formData();
	const input = PlaceOrderInput.safeParse({
		customerId: form.get('customerId'),
		items: [{ productId: form.get('productId'), quantity: Number(form.get('quantity')) }]
	});
	if (!input.success) return fail(400, { error: 'Wähle ein Produkt und eine Menge ab 1.' });

	const order = await db.placeOrder(input.data);
	if (!order) return fail(409, { error: 'Zu wenig auf Lager. Wähle eine kleinere Menge oder ein anderes Produkt.' });
	redirect(303, `/orders/${order.id}`);
}
