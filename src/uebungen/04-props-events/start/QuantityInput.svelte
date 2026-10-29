<script lang="ts">
	let { value = $bindable(1), max }: { value?: number; max: number } = $props();
</script>

<!-- TODO 4: Binde das Feld per `bind:value` an `value`, damit der Aufrufer die Menge sieht. -->
<input type="number" min="1" {max} {value} aria-label="Menge" />
