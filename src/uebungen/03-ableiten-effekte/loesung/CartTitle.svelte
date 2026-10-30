<script lang="ts">
	import type { Cart } from './cart.svelte.js';

	let { cart }: { cart: Cart } = $props();

	// Ein Side Effect nach außen: der Titel des Browser-Tabs.
	$effect(() => {
		document.title = `Warenkorb (${cart.count})`;
	});
</script>
