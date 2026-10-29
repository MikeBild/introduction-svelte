<script lang="ts">
	import { page } from '$app/state';
	import { euro, totalCents } from '#lib/shop.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Bestellung {page.params.id}</h1>
<p>Status: {data.order.status}</p>
<ul>
	{#each data.order.items as item (item.productId)}
		<li>{item.quantity} × {item.productId} à {euro(item.priceCents)}</li>
	{/each}
</ul>
<p>Summe: {euro(totalCents(data.order.items))}</p>
<p><a href="/orders">Zurück zu den Bestellungen</a></p>
