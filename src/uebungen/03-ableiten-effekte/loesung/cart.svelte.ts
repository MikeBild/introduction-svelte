import { totalCents, type OrderItem, type Product, type ProductId } from '#lib/shop.js';

export class Cart {
	items = $state<OrderItem[]>([]);
	// Abgeleitet: immer aktuell, niemand muss sie setzen.
	total = $derived(totalCents(this.items));
	count = $derived(this.items.reduce((sum, item) => sum + item.quantity, 0));

	add(product: Product) {
		const item = this.items.find((i) => i.productId === product.id);
		if (item) item.quantity += 1;
		else this.items.push({ productId: product.id, quantity: 1, priceCents: product.priceCents });
	}

	remove(productId: ProductId) {
		this.items = this.items.filter((i) => i.productId !== productId);
	}

	snapshot(): OrderItem[] {
		return $state.snapshot(this.items);
	}
}
