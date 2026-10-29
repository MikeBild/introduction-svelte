<script lang="ts">
	import { euro, type Product } from '#lib/shop.js';
	import ProductTable from './ProductTable.svelte';

	let { products }: { products: Product[] } = $props();
</script>

<ProductTable {products}>
	{#snippet row(product: Product)}
		<td>{product.name}</td>
		<td>{euro(product.priceCents)}</td>
	{/snippet}
	{#snippet empty()}Keine Produkte gefunden{/snippet}
</ProductTable>
