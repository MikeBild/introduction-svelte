<script lang="ts">
	export let label = 'Click Me!';

	function onClickHandler() {
		alert('Hello Svelte!');
	}
</script>

<svelte:options tag="atomic-button" />

<button type="button" on:click={onClickHandler}>{label}</button>
