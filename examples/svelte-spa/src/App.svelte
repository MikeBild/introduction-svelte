<script lang="ts">
	import { Button } from '@introduction-svelte/svelte-components';
	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://github.com/mikebild/introduction-svelte">Svelte/Kit introduction</a> to
		learn how to build Svelte/Kit apps.
	</p>
	<h2>Svelte Web Components</h2>
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
