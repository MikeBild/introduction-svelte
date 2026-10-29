import type { Product } from '#lib/shop.js';

export class ProductFilter {
	query = $state('');
	onlyInStock = $state(false);

	// Mehrere Zeilen Logik – trotzdem ein abgeleiteter Wert ohne Seiteneffekt.
	visible = $derived.by(() => {
		const q = this.query.trim().toLowerCase();
		return this.#products().filter(
			(p) => p.name.toLowerCase().includes(q) && (!this.onlyInStock || p.stock > 0)
		);
	});

	#products: () => Product[];

	constructor(products: () => Product[]) {
		this.#products = products;
	}
}
