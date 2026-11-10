<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Product } from '#lib/shop.js';

	type Props = { products: Product[]; row: Snippet<[Product]>; empty?: Snippet };
	let { products }: Props = $props();
</script>

<!-- TODO 1: Also read `row` and `empty` from the props.
     TODO 2: Render `row(product)` in a table row for each product.
     TODO 3: If the list is empty, render `empty` (if present) in a cell. -->
<table>
	<tbody>
		{#each products as product (product.id)}
			<tr><td>{product.name}</td></tr>
		{/each}
	</tbody>
</table>
