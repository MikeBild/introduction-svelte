<script lang="ts">
	import Stepper from '#uebungen/01-compiler/loesung/Stepper.svelte';
	import PriceList from '#uebungen/05-snippets/loesung/PriceList.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>Werkstatt-Shop</title></svelte:head>

<h1>Werkstatt-Shop</h1>
<p>Die Übungsanwendung zum Foliensatz „Svelte 5 &amp; SvelteKit“.</p>

<h2>Menge wählen (Übung 01)</h2>
<Stepper />

<h2>Preisliste (Übung 05)</h2>
<PriceList products={data.products} />
