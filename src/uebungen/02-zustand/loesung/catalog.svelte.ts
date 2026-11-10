import type { Product } from '#lib/shop.js';

export class Catalog {
	// No proxy: the list is only replaced as a whole, never mutated.
	products = $state.raw<Product[]>([]);

	replace(products: Product[]) {
		this.products = products;
	}
}
