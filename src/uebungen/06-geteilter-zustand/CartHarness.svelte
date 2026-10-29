<script lang="ts">
	import { untrack } from 'svelte';
	// Testhilfe: stellt den Warenkorb per Context bereit, wie es +layout.svelte tut.
	import type { Cart } from '#lib/cart.svelte.js';
	import { setCart } from './loesung/cart-context.js';
	import CartBadge from './loesung/CartBadge.svelte';

	let props: { cart: Cart } = $props();
	// Der Warenkorb wird einmal beim Start bereitgestellt.
	setCart(untrack(() => props.cart));
</script>

<CartBadge />
