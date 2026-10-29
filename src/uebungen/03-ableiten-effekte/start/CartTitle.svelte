<script lang="ts">
	import type { Cart } from './cart.svelte.js';

	let { cart }: { cart: Cart } = $props();

	// TODO 5: Setze mit `$effect` den Titel des Tabs auf `Warenkorb (<Anzahl>)`.
</script>
