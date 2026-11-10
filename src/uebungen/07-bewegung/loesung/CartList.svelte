<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { prefersReducedMotion } from 'svelte/motion';
	import { getCart } from '#lib/cart.svelte.js';
	import { productName } from '#lib/shop.js';

	const cart = getCart();
	// Motion with care: with reduced motion, no distance and no duration.
	let duration = $derived(prefersReducedMotion.current ? 0 : 200);
</script>

<ul>
	{#each cart.items as item (item.productId)}
		<li in:fly={{ y: -8, duration }} out:fade={{ duration }} animate:flip={{ duration }}>
			{item.quantity} × {productName(item.productId)}
			<button onclick={() => cart.remove(item.productId)}>Entfernen</button>
		</li>
	{:else}
		<li>Der Warenkorb ist leer. Unter „Produkte“ legst du etwas hinein.</li>
	{/each}
</ul>
