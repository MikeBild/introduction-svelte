// The workshop shop – plain TypeScript, without Svelte.
// All exercises and the app under src/routes build on it.

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

/** Readable labels for the order status – in one place for all views. */
export const orderStatusLabel: Record<OrderStatus, string> = {
	draft: 'Entwurf',
	placed: 'Bestellt',
	paid: 'Bezahlt',
	shipped: 'Versandt',
	cancelled: 'Storniert'
};

/** Product name instead of an ID like “p-1” in the UI. Unknown IDs stay visible. */
export const productName = (id: string, products: Product[] = sampleProducts) =>
	products.find((p) => p.id === id)?.name ?? id;

export const productId = (id: string) => id as ProductId;
export const orderId = (id: string) => id as OrderId;
export const customerId = (id: string) => id as CustomerId;

/** Sample data for exercises and tests */
export const sampleProducts: Product[] = [
	{ id: productId('p-1'), name: 'Hammer', priceCents: 1990, stock: 12 },
	{ id: productId('p-2'), name: 'Schraubendreher-Set', priceCents: 2490, stock: 5 },
	{ id: productId('p-3'), name: 'Wasserwaage', priceCents: 3450, stock: 0 },
	{ id: productId('p-4'), name: 'Akkuschrauber', priceCents: 8990, stock: 2 }
];
