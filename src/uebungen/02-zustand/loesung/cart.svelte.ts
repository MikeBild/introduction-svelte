import type { OrderItem, Product } from '#lib/shop.js';

export class Cart {
	// Deep State: Svelte hüllt das Array und jede Position in einen Proxy.
	items = $state<OrderItem[]>([]);

	add(product: Product) {
		const item = this.items.find((i) => i.productId === product.id);
		if (item) item.quantity += 1;
		else this.items.push({ productId: product.id, quantity: 1, priceCents: product.priceCents });
	}

	/** Eine einfache Kopie ohne Proxy – z. B. vor dem Senden oder Loggen. */
	snapshot(): OrderItem[] {
		return $state.snapshot(this.items);
	}
}
