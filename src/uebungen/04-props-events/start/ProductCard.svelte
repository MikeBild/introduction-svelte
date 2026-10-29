<script lang="ts">
	import type { Snippet } from 'svelte';
	import { euro, type Product } from '#lib/shop.js';

	type Props = { product: Product; onadd: (product: Product) => void; children?: Snippet };
	// TODO 1: Lies zusätzlich `onadd` und `children` aus `$props()`.
	let { product }: Props = $props();
</script>

<article>
	<h3>{product.name}</h3>
	<p>{euro(product.priceCents)}</p>
	<!-- TODO 2: Rendere `children`, falls vorhanden. -->
	<!-- TODO 3: Klick ruft `onadd(product)`; bei Bestand 0 ist der Button deaktiviert. -->
	<button>In den Warenkorb</button>
</article>
