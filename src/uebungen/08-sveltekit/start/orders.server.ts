// Load functions and Form Action for the routes under src/routes.
// The route files (+page.server.ts) only call these functions.
import { fail } from '@sveltejs/kit';
import { db } from '#lib/server/db.js';
import type { Order, Product } from '#lib/shop.js';

/** load for /products */
export async function loadProducts(): Promise<{ products: Product[] }> {
	// TODO 1: Return all products from `db.products()`.
	return { products: [] };
}

/** load for /orders */
export async function loadOrders(): Promise<{ orders: Order[]; products: Product[] }> {
	return { orders: await db.orders(), products: await db.products() };
}

/** load for /orders/[id] – unknown IDs become 404 */
export async function loadOrder({ params }: { params: { id: string } }): Promise<{ order: Order }> {
	// TODO 2: Read the order with `db.order(params.id)`.
	//         If it does not exist: `error(404, 'Diese Bestellung gibt es nicht. Wähle eine aus der Bestellliste.')` from '@sveltejs/kit'.
	void params;
	throw new Error('loadOrder ist noch nicht umgesetzt');
}

/** Form Action “order” for /orders */
export async function placeOrder({ request }: { request: Request }) {
	// TODO 3: Read the form data and validate it with `PlaceOrderInput` from '#lib/schema.js'
	//         (fields: customerId, productId, quantity – the quantity as a number).
	//         Invalid → `fail(400, { error: 'Wähle ein Produkt und eine Menge ab 1.' })`.
	// TODO 4: Create the order with `db.placeOrder(...)`.
	//         Result `null` → `fail(409, { error: 'Zu wenig auf Lager. Wähle eine kleinere Menge oder ein anderes Produkt.' })`.
	// TODO 5: Success → `redirect(303, `/orders/${order.id}`)`.
	void request;
	return fail(501, { error: 'placeOrder ist noch nicht umgesetzt. Bearbeite TODO 3 bis 5 in orders.server.ts.' });
}
