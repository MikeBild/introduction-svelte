<script lang="ts">
	import { euro } from '#lib/shop.js';

	let quantity = $state(1);
	let priceCents = 4990;
	let total = $derived(quantity * priceCents);
</script>

<button onclick={() => quantity--} disabled={quantity <= 1} aria-label="weniger">−</button>
<span data-testid="menge">{quantity}</span>
<button onclick={() => quantity++} aria-label="mehr">+</button>
<p>Summe: {euro(total)}</p>
