<script lang="ts">
	import Button from '$lib/atomics/Button.svelte';
</script>

<svelte:head>
	<title>Svelte Components | Home Page</title>
	<meta name="description" content="Svelte Components | Home Page" />
	<html lang="en" />
</svelte:head>

<main>
	<h1>Svelte Components</h1>
	<h2>Examples</h2>
	<div>
		<h3>Atomics</h3>
		<Button />
	</div>
	<div>
		<h3>Molecules</h3>
		...
	</div>
	<div>
		<h3>Organisms</h3>
		...
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #d4542a;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	h3 {
		color: #0f0f0e;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
