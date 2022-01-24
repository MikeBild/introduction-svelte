<script lang="ts">
	export let label = 'Click Me!';

	function onClickHandler() {
		alert('Hello Svelte!');
	}
</script>

<button type="button" on:click={onClickHandler}>{label}</button>
