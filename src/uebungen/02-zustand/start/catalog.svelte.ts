import type { Product } from '#lib/shop.js';

export class Catalog {
	// TODO 4: Die Produktliste wird nur ersetzt, nie verändert.
	//         Welche Rune passt – `$state` oder `$state.raw`?
	products: Product[] = [];

	replace(products: Product[]) {
		this.products = products;
	}
}
