<script lang="ts">
	import { getCart } from '#lib/cart.svelte.js';
	import ProductSearch from '#uebungen/04-props-events/loesung/ProductSearch.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const cart = getCart();
</script>

<h1>Produkte</h1>
<ProductSearch products={data.products} onadd={(product) => cart.add(product)} />
