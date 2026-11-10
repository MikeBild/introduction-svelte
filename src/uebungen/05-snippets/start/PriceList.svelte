<script lang="ts">
	import type { Product } from '#lib/shop.js';
	import ProductTable from './ProductTable.svelte';

	let { products }: { products: Product[] } = $props();
</script>

<!-- TODO 4: Add a second cell with the price to the `row` snippet
     (`euro(product.priceCents)` from #lib/shop.js).
     TODO 5: Add an `empty()` snippet with the text “Keine Produkte gefunden” (no products found). -->
<ProductTable {products}>
	{#snippet row(product: Product)}
		<td>{product.name}</td>
	{/snippet}
</ProductTable>
