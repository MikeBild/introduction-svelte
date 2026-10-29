import type { Product } from '#lib/shop.js';

export class Catalog {
	// Kein Proxy: Die Liste wird nur als Ganzes ersetzt, nie verändert.
	products = $state.raw<Product[]>([]);

	replace(products: Product[]) {
		this.products = products;
	}
}
