<script lang="ts">
	import { Button } from '@introduction-svelte/svelte-components';

	function onButtonClick() {
		alert('Hello from SvelteKit!');
	}
</script>

<svelte:head>
	<title>SvelteKit Example | Components Page</title>
</svelte:head>

<h2>Components</h2>

<div>
	<h3>Atomics</h3>
	<Button label="Click Me, please!" on:action={onButtonClick} />
</div>

<div>
	<h3>Molecules</h3>
	...
</div>

<div>
	<h3>Organisms</h3>
	...
</div>
