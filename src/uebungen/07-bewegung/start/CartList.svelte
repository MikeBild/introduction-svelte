<script lang="ts">
	import { getCart } from '#lib/cart.svelte.js';
	import { productName } from '#lib/shop.js';

	const cart = getCart();
</script>

<!-- TODO 1: Make the each block keyed by `item.productId`.
     TODO 2: New line items fly in (`in:fly`), removed ones fade out (`out:fade`).
     TODO 3: The remaining line items move up smoothly (`animate:flip`).
     TODO 4: With `prefersReducedMotion.current` (svelte/motion), the duration is 0. -->
<ul>
	{#each cart.items as item}
		<li>
			{item.quantity} × {productName(item.productId)}
			<button onclick={() => cart.remove(item.productId)}>Entfernen</button>
		</li>
	{:else}
		<li>Der Warenkorb ist leer. Unter „Produkte“ legst du etwas hinein.</li>
	{/each}
</ul>
