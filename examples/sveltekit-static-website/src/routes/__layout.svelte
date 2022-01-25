<header>
	<a href="/"><h1>Welcome to SvelteKit</h1></a>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	header, main, footer {
		text-align: center;
		padding: 1em;
		max-width: 640px;
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
