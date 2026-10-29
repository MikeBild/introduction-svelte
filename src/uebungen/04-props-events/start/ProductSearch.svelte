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
<input placeholder="Suchen" value={query} />
<label><input type="checkbox" checked={onlyInStock} /> nur lieferbar</label>
<p>{visible.length} Treffer</p>

{#each visible as product (product.id)}
	<ProductCard {product} {onadd} />
{/each}
