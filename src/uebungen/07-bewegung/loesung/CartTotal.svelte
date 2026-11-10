<script lang="ts">
	import { Tween, prefersReducedMotion } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { euro } from '#lib/shop.js';
	import { getCart } from '#lib/cart.svelte.js';

	const cart = getCart();
	// The total glides to its new value – except with reduced motion.
	const shown = Tween.of(() => cart.total, {
		duration: () => (prefersReducedMotion.current ? 0 : 400),
		easing: cubicOut
	});
</script>

<p>Summe: {euro(Math.round(shown.current))}</p>
