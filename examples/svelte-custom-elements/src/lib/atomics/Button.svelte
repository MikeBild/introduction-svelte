<svelte:options tag="atomic-button" />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = 'Click Me!';

	function onClickHandler() {
		const detail = { text: 'Some data from a Svelte based Custom-Element!' };

		//Dispatch Svelte Event
		dispatch('action', detail);

		const event = new CustomEvent('action', {
			detail,
			bubbles: true,
			cancelable: true,
			composed: true
		});

		//Dispatch Custom-Element Event
		this.dispatchEvent(event);

		//Some custom code
		alert('Hello from a Svelte Component!');
	}
</script>

<button class="button" on:click={onClickHandler}>{label}</button>

<style>
	.button {
		border: 1px solid black;
	}
</style>
