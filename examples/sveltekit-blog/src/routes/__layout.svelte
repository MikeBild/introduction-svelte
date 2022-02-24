<script>
	import Nav from '$lib/Nav.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
    <title>SvelteKit Blog Example</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
</svelte:head>

<div class="root-wrapper">
	<Header />
	<Nav />
	<main>
		<slot />
	</main>
</div>

<style>
	.root-wrapper {
		font-family: 'Roboto', serif;
	}
</style>
