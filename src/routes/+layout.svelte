<script lang="ts">
	// Die App setzt sich aus den Lösungen der Übungen zusammen.
	import { Cart, setCart } from '#lib/cart.svelte.js';
	import CartBadge from '#uebungen/06-geteilter-zustand/loesung/CartBadge.svelte';
	import CartTitle from '#uebungen/03-ableiten-effekte/loesung/CartTitle.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	// Pro Request ein eigener Warenkorb – über Context, nicht als Modul-Variable.
	const cart = setCart(new Cart());
</script>

<CartTitle {cart} />

<header>
	<nav>
		<a href="/">Start</a>
		<a href="/products">Produkte</a>
		<a href="/orders">Bestellungen</a>
	</nav>
	<CartBadge />
</header>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		font-family: system-ui, sans-serif;
		margin: 0 auto;
		max-width: 48rem;
		padding: 1rem;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		border-bottom: 1px solid #ccc;
	}
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
