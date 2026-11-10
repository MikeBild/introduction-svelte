<script lang="ts">
	import { untrack } from 'svelte';
	// Test helper: provides the cart via Context, as +layout.svelte does.
	import { setCart, type Cart } from '#lib/cart.svelte.js';
	import CartList from './loesung/CartList.svelte';
	import CartTotal from './loesung/CartTotal.svelte';

	let props: { cart: Cart } = $props();
	// The cart is provided once at startup.
	setCart(untrack(() => props.cart));
</script>

<CartList />
<CartTotal />
