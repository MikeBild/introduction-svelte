<script>
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import { toUpper } from '$lib/utils';
</script>

<Header title={toUpper(`Welcome to DOS 2021 - JAMstack with SvelteKit and AWS-CDK`)} />

<Nav />

<main>
	<slot />
</main>
