<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Product } from '#lib/shop.js';

	type Props = { products: Product[]; row: Snippet<[Product]>; empty?: Snippet };
	let { products, row, empty }: Props = $props();
</script>

<table>
	<tbody>
		{#each products as product (product.id)}
			<tr>{@render row(product)}</tr>
		{:else}
			<tr><td>{@render empty?.()}</td></tr>
		{/each}
	</tbody>
</table>
