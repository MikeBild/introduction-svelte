import type { Product } from '#lib/shop.js';

export class ProductFilter {
	query = $state('');
	onlyInStock = $state(false);

	// TODO 4: Berechne mit `$derived.by` alle Produkte, deren Name `query` enthält
	//         (ohne Groß-/Kleinschreibung, Leerzeichen am Rand ignorieren).
	//         Ist `onlyInStock` gesetzt, bleiben nur Produkte mit Bestand > 0.
	visible: Product[] = [];

	#products: () => Product[];

	constructor(products: () => Product[]) {
		this.#products = products;
	}
}
