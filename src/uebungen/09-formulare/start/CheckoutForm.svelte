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
	// TODO 3: Leite `quantityError` mit `$derived` aus `errors['items.0.quantity']` ab.
	let quantityError: string | undefined = undefined;

	function handleSubmit(event: SubmitEvent) {
		// TODO 1: Verhindere das Neuladen der Seite mit `event.preventDefault()`.
		// TODO 2: Prüfe `{ customerId: 'c-1', items: [{ productId, quantity }] }` mit
		//         `PlaceOrderInput.safeParse`. Ungültig → `errors = toFieldErrors(result.error.issues)`.
		//         Gültig → `errors` leeren und `onorder(result.data)` aufrufen.
		void event;
		void PlaceOrderInput;
		void toFieldErrors;
		void onorder;
	}
</script>

<!-- TODO 1: Verbinde `handleSubmit` per `onsubmit` mit dem Formular. -->
<form novalidate>
	<label for="product">Produkt</label>
	<select id="product" bind:value={productId}>
		{#each products as product (product.id)}
			<option value={product.id}>{product.name}</option>
		{/each}
	</select>

	<label for="quantity">Menge</label>
	<!-- TODO 4: Binde das Feld per `bind:value` an `quantity`. Markiere es bei einem Fehler mit
	     `aria-invalid="true"` und verknüpfe die Meldung per `aria-describedby="quantity-error"`. -->
	<input id="quantity" type="number" min="1" value={quantity} />
	{#if quantityError}<p id="quantity-error">{quantityError}</p>{/if}

	<button>Bestellen</button>
</form>
