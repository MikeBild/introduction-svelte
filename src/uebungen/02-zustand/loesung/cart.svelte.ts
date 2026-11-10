import type { OrderItem, Product } from '#lib/shop.js';

export class Cart {
	// Deep state: Svelte wraps the array and every line item in a proxy.
	items = $state<OrderItem[]>([]);

	add(product: Product) {
		const item = this.items.find((i) => i.productId === product.id);
		if (item) item.quantity += 1;
		else this.items.push({ productId: product.id, quantity: 1, priceCents: product.priceCents });
	}

	/** A plain copy without a proxy – e.g. before sending or logging. */
	snapshot(): OrderItem[] {
		return $state.snapshot(this.items);
	}
}
