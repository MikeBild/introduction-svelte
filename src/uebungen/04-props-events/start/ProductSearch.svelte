<script lang="ts">
	import type { Product } from '#lib/shop.js';
	import ProductCard from './ProductCard.svelte';

	type Props = { products: Product[]; onadd: (product: Product) => void };
	let { products, onadd }: Props = $props();

	let query = $state('');
	let onlyInStock = $state(false);

	// TODO 5: Filter by `query` and `onlyInStock` with `$derived.by` (as in exercise 03).
	let visible = $derived(products);
</script>

<!-- TODO 6: Connect the search field and the checkbox with `bind:value` and `bind:checked`.
     When stock is 0, show “Ausverkauft” (`<small>`) as the card's children. -->
<label for="product-search" class="visually-hidden">Produkte suchen</label>
<input id="product-search" type="search" placeholder="z. B. Hammer" value={query} />
<label><input type="checkbox" checked={onlyInStock} /> nur lieferbar</label>
<p>{visible.length} Treffer</p>

{#each visible as product (product.id)}
	<ProductCard {product} {onadd} />
{/each}

<style>
	/* Visible to screen readers only: the field still has a real label. */
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
		border: 0;
	}
</style>
