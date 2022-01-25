<script>
	function handleClick() {
		alert('Thank you!');
	}
</script>

<svelte:head>
	<title>SvelteKit Example | About Page</title>
</svelte:head>

<h2>About</h2>
<p>This is a Static Site Generation Example developed by Mike Bild.</p>

<button on:click={handleClick}>Click me!</button>
