<script lang="ts">
	import { euro } from '#lib/shop.js';

	let quantity = $state(1);
	let priceCents = 4990;
	let total = $derived(quantity * priceCents);
</script>

<button onclick={() => quantity--} disabled={quantity <= 1} aria-label="Menge verringern">−</button>
<span data-testid="menge">{quantity}</span>
<button onclick={() => quantity++} aria-label="Menge erhöhen">+</button>
<p>Summe: {euro(total)}</p>
