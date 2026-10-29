<!-- Svelte-4-Syntax: Diese Datei läuft im Legacy-Modus, bis du sie migrierst. -->
<svelte:options runes={false} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { euro, type Product } from '#lib/shop.js';

	export let product: Product;

	let quantity = 1;
	$: total = quantity * product.priceCents;

	const dispatch = createEventDispatcher<{ add: { product: Product; quantity: number } }>();
</script>

<h3>{product.name}</h3>
<button aria-label="weniger" on:click={() => quantity--} disabled={quantity <= 1}>−</button>
<span data-testid="menge">{quantity}</span>
<button aria-label="mehr" on:click={() => quantity++}>+</button>
<p>Summe: {euro(total)}</p>
<slot name="hint" />
<button on:click={() => dispatch('add', { product, quantity })}>In den Warenkorb</button>
