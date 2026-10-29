// Eine In-Memory-„Datenbank“. Nur auf dem Server importierbar (#lib/server/…).
import {
	customerId,
	orderId,
	sampleProducts,
	type Order,
	type Product
} from '#lib/shop.js';
import type { PlaceOrderInput } from '#lib/schema.js';

function createDb() {
	let products: Product[] = [];
	let orders: Order[] = [];
	let nextId = 1;

	const db = {
		/** Setzt die Daten auf die Beispieldaten zurück – praktisch für Tests. */
		reset() {
			products = structuredClone(sampleProducts);
			orders = [];
			nextId = 1;
		},
		async products(): Promise<Product[]> {
			return structuredClone(products);
		},
		async order(id: string): Promise<Order | undefined> {
			const order = orders.find((o) => o.id === id);
			return order && structuredClone(order);
		},
		async orders(): Promise<Order[]> {
			return structuredClone(orders);
		},
		/** Legt eine Bestellung an – oder liefert `null`, wenn ein Produkt fehlt oder der Bestand nicht reicht. */
		async placeOrder(input: PlaceOrderInput): Promise<Order | null> {
			const lines = input.items.map((item) => ({
				item,
				product: products.find((p) => p.id === item.productId)
			}));
			if (lines.some(({ item, product }) => !product || product.stock < item.quantity)) return null;

			const order: Order = {
				id: orderId(`o-${nextId++}`),
				customerId: customerId(input.customerId),
				items: lines.map(({ item, product }) => ({
					productId: product!.id,
					quantity: item.quantity,
					priceCents: product!.priceCents
				})),
				status: 'placed',
				createdAt: new Date().toISOString()
			};
			for (const { item, product } of lines) product!.stock -= item.quantity;
			orders.push(order);
			return structuredClone(order);
		}
	};
	db.reset();
	return db;
}

export const db = createDb();
