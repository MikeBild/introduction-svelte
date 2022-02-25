<script>
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { toUpper } from '$lib/utils';
</script>

<Header title={toUpper('Welcome')} />

<Nav />

<main>
	<slot />
</main>
