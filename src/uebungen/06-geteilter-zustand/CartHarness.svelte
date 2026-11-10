<script lang="ts">
	import { untrack } from 'svelte';
	// Test helper: provides the cart via Context, as +layout.svelte does.
	import type { Cart } from '#lib/cart.svelte.js';
	import { setCart } from './loesung/cart-context.js';
	import CartBadge from './loesung/CartBadge.svelte';

	let props: { cart: Cart } = $props();
	// The cart is provided once at startup.
	setCart(untrack(() => props.cart));
</script>

<CartBadge />
