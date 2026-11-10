<script lang="ts">
	import { euro } from '#lib/shop.js';
	import { getCart } from '#lib/cart.svelte.js';

	const cart = getCart();
	// TODO 5: Let the total glide with `Tween.of(() => cart.total, …)` from 'svelte/motion'
	//         (400 ms, `cubicOut`) and show `shown.current`.
	//         With `prefersReducedMotion.current`, the duration is 0.
</script>

<p>Summe: {euro(0)}</p>
