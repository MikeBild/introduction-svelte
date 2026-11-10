<script lang="ts">
	// Test helper: binds the quantity like a real caller.
	import QuantityInput from './loesung/QuantityInput.svelte';

	let quantity = $state(1);
</script>

<QuantityInput bind:value={quantity} max={3} />
<p>Gewählt: {quantity}</p>
