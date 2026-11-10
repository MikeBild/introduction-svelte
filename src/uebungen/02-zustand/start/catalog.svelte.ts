import type { Product } from '#lib/shop.js';

export class Catalog {
	// TODO 4: The product list is only replaced, never mutated.
	//         Which rune fits – `$state` or `$state.raw`?
	products: Product[] = [];

	replace(products: Product[]) {
		this.products = products;
	}
}
