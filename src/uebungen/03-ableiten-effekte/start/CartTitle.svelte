<script lang="ts">
	import type { Cart } from './cart.svelte.js';

	let { cart }: { cart: Cart } = $props();

	// TODO 5: Use `$effect` to set the tab title to `Warenkorb (<Anzahl>)` (cart (count)).
</script>
