// Der Werkstatt-Shop – reines TypeScript, ohne Svelte.
// Alle Übungen und die App unter src/routes bauen darauf auf.

export type ProductId = string & { readonly __brand: 'ProductId' };
export type OrderId = string & { readonly __brand: 'OrderId' };
export type CustomerId = string & { readonly __brand: 'CustomerId' };

export type Product = { id: ProductId; name: string; priceCents: number; stock: number };
export type OrderItem = { productId: ProductId; quantity: number; priceCents: number };
export type OrderStatus = 'draft' | 'placed' | 'paid' | 'shipped' | 'cancelled';
export type Order = {
	id: OrderId;
	customerId: CustomerId;
	items: OrderItem[];
	status: OrderStatus;
	createdAt: string;
};
export type Customer = { id: CustomerId; name: string; email: string };

export const totalCents = (items: OrderItem[]) =>
	items.reduce((sum, item) => sum + item.quantity * item.priceCents, 0);

export const euro = (cents: number) =>
	(cents / 100).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

/** Lesbare Bezeichnungen für den Bestellstatus – zentral für alle Ansichten. */
export const orderStatusLabel: Record<OrderStatus, string> = {
	draft: 'Entwurf',
	placed: 'Bestellt',
	paid: 'Bezahlt',
	shipped: 'Versandt',
	cancelled: 'Storniert'
};

/** Produktname statt ID wie „p-1“ in der Oberfläche. Unbekannte IDs bleiben sichtbar. */
export const productName = (id: string, products: Product[] = sampleProducts) =>
	products.find((p) => p.id === id)?.name ?? id;

export const productId = (id: string) => id as ProductId;
export const orderId = (id: string) => id as OrderId;
export const customerId = (id: string) => id as CustomerId;

/** Beispieldaten für Übungen und Tests */
export const sampleProducts: Product[] = [
	{ id: productId('p-1'), name: 'Hammer', priceCents: 1990, stock: 12 },
	{ id: productId('p-2'), name: 'Schraubendreher-Set', priceCents: 2490, stock: 5 },
	{ id: productId('p-3'), name: 'Wasserwaage', priceCents: 3450, stock: 0 },
	{ id: productId('p-4'), name: 'Akkuschrauber', priceCents: 8990, stock: 2 }
];
