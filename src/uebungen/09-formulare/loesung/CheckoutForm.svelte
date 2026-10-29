<script lang="ts">
	import { PlaceOrderInput } from '#lib/schema.js';
	import type { Product } from '#lib/shop.js';
	import { toFieldErrors } from './field-errors.js';

	type Props = { products: Product[]; onorder: (input: PlaceOrderInput) => void };
	let { products, onorder }: Props = $props();

	// Ohne Startwert übernimmt bind:value die erste Option der Liste.
	let productId = $state<string>();
	let quantity = $state<number | null>(1);
	let errors = $state<Record<string, string>>({});
	let quantityError = $derived(errors['items.0.quantity']);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const result = PlaceOrderInput.safeParse({
			customerId: 'c-1',
			items: [{ productId, quantity }]
		});
		if (!result.success) {
			errors = toFieldErrors(result.error.issues);
			return;
		}
		errors = {};
		onorder(result.data);
	}
</script>

<form onsubmit={handleSubmit} novalidate>
	<label for="product">Produkt</label>
	<select id="product" bind:value={productId}>
		{#each products as product (product.id)}
			<option value={product.id}>{product.name}</option>
		{/each}
	</select>

	<label for="quantity">Menge</label>
	<input
		id="quantity"
		type="number"
		min="1"
		bind:value={quantity}
		aria-invalid={quantityError ? 'true' : undefined}
		aria-describedby={quantityError ? 'quantity-error' : undefined}
	/>
	{#if quantityError}<p id="quantity-error">{quantityError}</p>{/if}

	<button>Bestellen</button>
</form>
