import { totalCents, type OrderItem, type Product, type ProductId } from '#lib/shop.js';

export class Cart {
	items = $state<OrderItem[]>([]);
	// TODO 1: Leite `total` mit `$derived` und `totalCents` ab.
	total = 0;
	// TODO 2: Leite `count` (Summe aller Mengen) mit `$derived` ab.
	count = 0;

	add(product: Product) {
		const item = this.items.find((i) => i.productId === product.id);
		if (item) item.quantity += 1;
		else this.items.push({ productId: product.id, quantity: 1, priceCents: product.priceCents });
	}

	remove(productId: ProductId) {
		// TODO 3: Entferne die Position mit dieser `productId`.
		void productId;
	}

	snapshot(): OrderItem[] {
		return $state.snapshot(this.items);
	}
}
