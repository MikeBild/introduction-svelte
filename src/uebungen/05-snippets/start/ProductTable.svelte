<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Product } from '#lib/shop.js';

	type Props = { products: Product[]; row: Snippet<[Product]>; empty?: Snippet };
	let { products }: Props = $props();
</script>

<!-- TODO 1: Lies auch `row` und `empty` aus den Props.
     TODO 2: Rendere je Produkt `row(product)` in einer Zeile.
     TODO 3: Ist die Liste leer, rendere `empty` (falls vorhanden) in einer Zelle. -->
<table>
	<tbody>
		{#each products as product (product.id)}
			<tr><td>{product.name}</td></tr>
		{/each}
	</tbody>
</table>
