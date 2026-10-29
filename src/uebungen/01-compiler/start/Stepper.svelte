<script lang="ts">
	import { euro } from '#lib/shop.js';

	// TODO 1: Mache `quantity` mit `$state` reaktiv.
	const quantity = 1;
	const priceCents = 4990;
	// TODO 2: Leite `total` mit `$derived` aus `quantity` und `priceCents` ab.
	const total = 0;
</script>

<!-- TODO 3: `onclick` verringert bzw. erhöht die Menge; „−“ ist bei Menge 1 deaktiviert. -->
<button aria-label="Menge verringern">−</button>
<span data-testid="menge">{quantity}</span>
<button aria-label="Menge erhöhen">+</button>
<p>Summe: {euro(total)}</p>
