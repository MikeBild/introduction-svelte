<script lang="ts">
	import { getCart } from '#lib/cart.svelte.js';
	import { productName } from '#lib/shop.js';

	const cart = getCart();
</script>

<!-- TODO 1: Mache den each-Block keyed über `item.productId`.
     TODO 2: Neue Positionen fliegen herein (`in:fly`), entfernte blenden aus (`out:fade`).
     TODO 3: Die übrigen Positionen rücken weich nach (`animate:flip`).
     TODO 4: Bei `prefersReducedMotion.current` (svelte/motion) ist die Dauer 0. -->
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
