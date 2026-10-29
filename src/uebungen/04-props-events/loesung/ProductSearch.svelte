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

<input placeholder="Suchen" bind:value={query} />
<label><input type="checkbox" bind:checked={onlyInStock} /> nur lieferbar</label>
<p>{visible.length} Treffer</p>

{#each visible as product (product.id)}
	<ProductCard {product} {onadd}>
		{#if product.stock === 0}<small>Ausverkauft</small>{/if}
	</ProductCard>
{/each}
