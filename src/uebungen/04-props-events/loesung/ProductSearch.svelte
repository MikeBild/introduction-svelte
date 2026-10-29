<script lang="ts">
	import type { Product } from '#lib/shop.js';
	import ProductCard from './ProductCard.svelte';

	type Props = { products: Product[]; onadd: (product: Product) => void };
	let { products, onadd }: Props = $props();

	let query = $state('');
	let onlyInStock = $state(false);

	let visible = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return products.filter(
			(p) => p.name.toLowerCase().includes(q) && (!onlyInStock || p.stock > 0)
		);
	});
</script>

<label for="product-search" class="visually-hidden">Produkte suchen</label>
<input id="product-search" type="search" placeholder="z. B. Hammer" bind:value={query} />
<label><input type="checkbox" bind:checked={onlyInStock} /> nur lieferbar</label>
<p>{visible.length} Treffer</p>

{#each visible as product (product.id)}
	<ProductCard {product} {onadd}>
		{#if product.stock === 0}<small>Ausverkauft</small>{/if}
	</ProductCard>
{/each}

<style>
	/* Nur für Screenreader sichtbar: Das Feld hat trotzdem eine echte Beschriftung. */
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
