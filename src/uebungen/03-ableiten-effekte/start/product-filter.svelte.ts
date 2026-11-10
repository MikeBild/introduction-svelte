import type { Product } from '#lib/shop.js';

export class ProductFilter {
	query = $state('');
	onlyInStock = $state(false);

	// TODO 4: Use `$derived.by` to compute all products whose name contains `query`
	//         (case-insensitive, ignore leading and trailing spaces).
	//         If `onlyInStock` is set, only products with stock > 0 remain.
	visible: Product[] = [];

	#products: () => Product[];

	constructor(products: () => Product[]) {
		this.#products = products;
	}
}
