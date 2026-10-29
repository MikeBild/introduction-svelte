<script lang="ts">
	import { untrack } from 'svelte';
	// Testhilfe: stellt den Warenkorb per Context bereit, wie es +layout.svelte tut.
	import { setCart, type Cart } from '#lib/cart.svelte.js';
	import CartList from './loesung/CartList.svelte';
	import CartTotal from './loesung/CartTotal.svelte';

	let props: { cart: Cart } = $props();
	// Der Warenkorb wird einmal beim Start bereitgestellt.
	setCart(untrack(() => props.cart));
</script>

<CartList />
<CartTotal />
