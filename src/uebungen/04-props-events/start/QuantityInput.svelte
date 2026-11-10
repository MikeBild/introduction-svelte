<script lang="ts">
	let { value = $bindable(1), max }: { value?: number; max: number } = $props();
</script>

<!-- TODO 4: Bind the field to `value` with `bind:value` so the caller sees the quantity. -->
<input type="number" min="1" {max} {value} aria-label="Menge" />
