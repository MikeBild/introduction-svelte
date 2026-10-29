// Load-Funktionen und Form Action für die Routen unter src/routes.
// Die Routen-Dateien (+page.server.ts) rufen diese Funktionen nur auf.
import { fail } from '@sveltejs/kit';
import { db } from '#lib/server/db.js';
import type { Order, Product } from '#lib/shop.js';

/** load für /products */
export async function loadProducts(): Promise<{ products: Product[] }> {
	// TODO 1: Liefere alle Produkte aus `db.products()`.
	return { products: [] };
}

/** load für /orders */
export async function loadOrders(): Promise<{ orders: Order[]; products: Product[] }> {
	return { orders: await db.orders(), products: await db.products() };
}

/** load für /orders/[id] – unbekannte IDs werden zu 404 */
export async function loadOrder({ params }: { params: { id: string } }): Promise<{ order: Order }> {
	// TODO 2: Lies die Bestellung mit `db.order(params.id)`.
	//         Gibt es sie nicht: `error(404, 'Diese Bestellung gibt es nicht. Wähle eine aus der Bestellliste.')` aus '@sveltejs/kit'.
	void params;
	throw new Error('loadOrder ist noch nicht umgesetzt');
}

/** Form Action „bestellen“ für /orders */
export async function placeOrder({ request }: { request: Request }) {
	// TODO 3: Lies die Formulardaten und prüfe sie mit `PlaceOrderInput` aus '#lib/schema.js'
	//         (Felder: customerId, productId, quantity – die Menge als Zahl).
	//         Ungültig → `fail(400, { error: 'Wähle ein Produkt und eine Menge ab 1.' })`.
	// TODO 4: Lege die Bestellung mit `db.placeOrder(...)` an.
	//         Ergebnis `null` → `fail(409, { error: 'Zu wenig auf Lager. Wähle eine kleinere Menge oder ein anderes Produkt.' })`.
	// TODO 5: Erfolg → `redirect(303, `/orders/${order.id}`)`.
	void request;
	return fail(501, { error: 'placeOrder ist noch nicht umgesetzt. Bearbeite TODO 3 bis 5 in orders.server.ts.' });
}
