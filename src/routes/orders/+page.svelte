<script lang="ts">
	import { enhance } from '$app/forms';
	import { euro, totalCents } from '#lib/shop.js';
	import QuantityInput from '#uebungen/04-props-events/loesung/QuantityInput.svelte';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	let productId = $state('p-1');
	let quantity = $state(1);
	let max = $derived(Math.max(1, data.products.find((p) => p.id === productId)?.stock ?? 1));
</script>

<h1>Bestellen</h1>

<form method="POST" use:enhance>
	<input type="hidden" name="customerId" value="c-1" />
	<select name="productId" bind:value={productId}>
		{#each data.products as product (product.id)}
			<option value={product.id}>{product.name} ({product.stock} auf Lager)</option>
		{/each}
	</select>
	<QuantityInput bind:value={quantity} {max} />
	<input type="hidden" name="quantity" value={quantity} />
	<button>Bestellen</button>
	{#if form?.error}<p role="alert">{form.error}</p>{/if}
</form>

<h2>Bestellungen</h2>
<ul>
	{#each data.orders as order (order.id)}
		<li><a href="/orders/{order.id}">{order.id}</a> · {order.status} · {euro(totalCents(order.items))}</li>
	{:else}
		<li>Noch keine Bestellungen.</li>
	{/each}
</ul>
