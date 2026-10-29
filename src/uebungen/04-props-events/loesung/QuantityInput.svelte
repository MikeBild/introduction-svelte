<script lang="ts">
	let { value = $bindable(1), max }: { value?: number; max: number } = $props();
</script>

<input type="number" min="1" {max} bind:value aria-label="Menge" />
