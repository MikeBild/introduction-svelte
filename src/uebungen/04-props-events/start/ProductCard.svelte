<script lang="ts">
	import type { Snippet } from 'svelte';
	import { euro, type Product } from '#lib/shop.js';

	type Props = { product: Product; onadd: (product: Product) => void; children?: Snippet };
	// TODO 1: Also read `onadd` and `children` from `$props()`.
	let { product }: Props = $props();
</script>

<article>
	<h3>{product.name}</h3>
	<p>{euro(product.priceCents)}</p>
	<!-- TODO 2: Render `children` if present. -->
	<!-- TODO 3: A click calls `onadd(product)`; when stock is 0, the button is disabled. -->
	<button>In den Warenkorb</button>
</article>
