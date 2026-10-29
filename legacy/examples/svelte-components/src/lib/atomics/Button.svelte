<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = 'Click Me!';

	function onClickHandler() {
		const detail = { text: 'Some data from a Svelte based Custom-Element!' };
		dispatch('action', detail);
		
		alert('Hello from Svelte!');
	}
</script>

<button type="button" on:click={onClickHandler}>{label}</button>
