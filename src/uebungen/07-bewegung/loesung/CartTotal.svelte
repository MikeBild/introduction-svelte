<script lang="ts">
	import { Tween, prefersReducedMotion } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { euro } from '#lib/shop.js';
	import { getCart } from '#lib/cart.svelte.js';

	const cart = getCart();
	// Die Summe gleitet zu ihrem neuen Wert – außer bei reduzierter Bewegung.
	const shown = Tween.of(() => cart.total, {
		duration: () => (prefersReducedMotion.current ? 0 : 400),
		easing: cubicOut
	});
</script>

<p>Summe: {euro(Math.round(shown.current))}</p>
