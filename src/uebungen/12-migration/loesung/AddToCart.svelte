<script lang="ts">
	import type { Snippet } from 'svelte';
	import { euro, type Product } from '#lib/shop.js';

	type Props = {
		product: Product;
		onadd: (detail: { product: Product; quantity: number }) => void;
		hint?: Snippet;
	};
	let { product, onadd, hint }: Props = $props();

	let quantity = $state(1);
	let total = $derived(quantity * product.priceCents);
</script>

<h3>{product.name}</h3>
<button aria-label="Menge verringern" onclick={() => quantity--} disabled={quantity <= 1}>−</button>
<span data-testid="menge">{quantity}</span>
<button aria-label="Menge erhöhen" onclick={() => quantity++}>+</button>
<p>Summe: {euro(total)}</p>
{@render hint?.()}
<button onclick={() => onadd({ product, quantity })}>In den Warenkorb</button>
