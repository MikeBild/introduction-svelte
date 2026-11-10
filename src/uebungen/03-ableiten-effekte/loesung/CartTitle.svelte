<script lang="ts">
	import type { Cart } from './cart.svelte.js';

	let { cart }: { cart: Cart } = $props();

	// A side effect to the outside world: the title of the browser tab.
	$effect(() => {
		document.title = `Warenkorb (${cart.count})`;
	});
</script>
