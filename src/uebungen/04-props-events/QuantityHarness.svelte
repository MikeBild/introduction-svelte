<script lang="ts">
	// Testhilfe: bindet die Menge wie ein echter Aufrufer.
	import QuantityInput from './loesung/QuantityInput.svelte';

	let quantity = $state(1);
</script>

<QuantityInput bind:value={quantity} max={3} />
<p>Gewählt: {quantity}</p>
