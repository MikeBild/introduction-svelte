<script lang="ts">
	import type { Product } from '#lib/shop.js';
	import ProductTable from './ProductTable.svelte';

	let { products }: { products: Product[] } = $props();
</script>

<!-- TODO 4: Ergänze im Snippet `row` eine zweite Zelle mit dem Preis
     (`euro(product.priceCents)` aus #lib/shop.js).
     TODO 5: Ergänze ein Snippet `empty()` mit dem Text „Keine Produkte gefunden“. -->
<ProductTable {products}>
	{#snippet row(product: Product)}
		<td>{product.name}</td>
	{/snippet}
</ProductTable>
