<script lang="ts">
	import type { Product } from '#lib/shop.js';
	import ProductCard from './ProductCard.svelte';

	type Props = { products: Product[]; onadd: (product: Product) => void };
	let { products, onadd }: Props = $props();

	let query = $state('');
	let onlyInStock = $state(false);

	// TODO 5: Filtere mit `$derived.by` nach `query` und `onlyInStock` (wie in Übung 03).
	let visible = $derived(products);
</script>

<!-- TODO 6: Verbinde Suchfeld und Checkbox per `bind:value` bzw. `bind:checked`.
     Zeig bei Bestand 0 „Ausverkauft“ (`<small>`) als children der Karte. -->
<label for="product-search" class="visually-hidden">Produkte suchen</label>
<input id="product-search" type="search" placeholder="z. B. Hammer" value={query} />
<label><input type="checkbox" checked={onlyInStock} /> nur lieferbar</label>
<p>{visible.length} Treffer</p>

{#each visible as product (product.id)}
	<ProductCard {product} {onadd} />
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
