import type { OrderItem, Product } from '#lib/shop.js';

export class Cart {
	// TODO 1: Make `items` reactive with `$state` (deep state).
	items: OrderItem[] = [];

	add(product: Product) {
		// TODO 2: If the product is already there, increase `quantity` by 1.
		//         Otherwise add a new line item with quantity 1 and the product's price.
		void product;
	}

	snapshot(): OrderItem[] {
		// TODO 3: Return a copy without a proxy using `$state.snapshot`.
		return this.items;
	}
}
