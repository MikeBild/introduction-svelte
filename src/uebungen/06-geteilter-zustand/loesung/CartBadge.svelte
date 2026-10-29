<script lang="ts">
	import { euro } from '#lib/shop.js';
	import { getCart } from './cart-context.js';
	import { online } from './online.js';

	const cart = getCart();
</script>

<a href="/cart">Warenkorb ({cart.count}) · {euro(cart.total)}</a>
{#if !$online}<p role="status">Offline – bestellen kannst du wieder, sobald du online bist.</p>{/if}
