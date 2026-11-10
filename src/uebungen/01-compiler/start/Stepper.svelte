<script lang="ts">
	import { euro } from '#lib/shop.js';

	// TODO 1: Make `quantity` reactive with `$state`.
	const quantity = 1;
	const priceCents = 4990;
	// TODO 2: Derive `total` from `quantity` and `priceCents` with `$derived`.
	const total = 0;
</script>

<!-- TODO 3: `onclick` decreases or increases the quantity; “−” is disabled at quantity 1. -->
<button aria-label="Menge verringern">−</button>
<span data-testid="menge">{quantity}</span>
<button aria-label="Menge erhöhen">+</button>
<p>Summe: {euro(total)}</p>
