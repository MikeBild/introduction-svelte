import type { OrderItem, Product } from '#lib/shop.js';

export class Cart {
	// TODO 1: Mache `items` mit `$state` reaktiv (Deep State).
	items: OrderItem[] = [];

	add(product: Product) {
		// TODO 2: Gibt es das Produkt schon, erhöhe `quantity` um 1.
		//         Sonst füge eine neue Position mit Menge 1 und dem Preis des Produkts hinzu.
		void product;
	}

	snapshot(): OrderItem[] {
		// TODO 3: Liefere mit `$state.snapshot` eine Kopie ohne Proxy.
		return this.items;
	}
}
