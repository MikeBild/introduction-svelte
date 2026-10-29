<script lang="ts">
	import type { Snippet } from 'svelte';
	import { euro, type Product } from '#lib/shop.js';

	type Props = { product: Product; onadd: (product: Product) => void; children?: Snippet };
	let { product, onadd, children }: Props = $props();
</script>

<article>
	<h3>{product.name}</h3>
	<p>{euro(product.priceCents)}</p>
	{@render children?.()}
	<button onclick={() => onadd(product)} disabled={product.stock === 0}>In den Warenkorb</button>
</article>
