<script lang="ts">
	import { PlaceOrderInput } from '#lib/schema.js';
	import type { Product } from '#lib/shop.js';
	import { toFieldErrors } from './field-errors.js';

	type Props = { products: Product[]; onorder: (input: PlaceOrderInput) => void };
	let { products, onorder }: Props = $props();

	// Without an initial value, bind:value takes the first option of the list.
	let productId = $state<string>();
	let quantity = $state<number | null>(1);
	let errors = $state<Record<string, string>>({});
	// TODO 3: Derive `quantityError` from `errors['items.0.quantity']` with `$derived`.
	let quantityError: string | undefined = undefined;

	function handleSubmit(event: SubmitEvent) {
		// TODO 1: Prevent the page reload with `event.preventDefault()`.
		// TODO 2: Validate `{ customerId: 'c-1', items: [{ productId, quantity }] }` with
		//         `PlaceOrderInput.safeParse`. Invalid → `errors = toFieldErrors(result.error.issues)`.
		//         Valid → clear `errors` and call `onorder(result.data)`.
		void event;
		void PlaceOrderInput;
		void toFieldErrors;
		void onorder;
	}
</script>

<!-- TODO 1: Connect `handleSubmit` to the form with `onsubmit`. -->
<form novalidate>
	<label for="product">Produkt</label>
	<select id="product" bind:value={productId}>
		{#each products as product (product.id)}
			<option value={product.id}>{product.name}</option>
		{/each}
	</select>

	<label for="quantity">Menge</label>
	<!-- TODO 4: Bind the field to `quantity` with `bind:value`. On an error, mark it with
	     `aria-invalid="true"` and link the message with `aria-describedby="quantity-error"`. -->
	<input id="quantity" type="number" min="1" value={quantity} />
	{#if quantityError}<p id="quantity-error">{quantityError}</p>{/if}

	<button>Bestellen</button>
</form>
