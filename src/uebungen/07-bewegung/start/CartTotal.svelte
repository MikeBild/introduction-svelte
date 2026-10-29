<script lang="ts">
	import { euro } from '#lib/shop.js';
	import { getCart } from '#lib/cart.svelte.js';

	const cart = getCart();
	// TODO 5: Lass die Summe mit `Tween.of(() => cart.total, …)` aus 'svelte/motion' gleiten
	//         (400 ms, `cubicOut`) und zeige `shown.current` an.
	//         Bei `prefersReducedMotion.current` ist die Dauer 0.
</script>

<p>Summe: {euro(0)}</p>
