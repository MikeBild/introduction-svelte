<script context="module">
	import { request, gql } from 'graphql-request';

	export const load = async ({ fetch }) => {
		const { articles } = await request(
			'http://localhost:8080/graphql',
			gql`
				query AllArticles {
					articles {
						id
						text: content
					}
				}
			`
		);

		return { props: { articles } };
	};
</script>

<script>
	import { goto } from '$app/navigation';
	export let articles;
	export let query;
</script>

<svelte:head>
	<title>SvelteKit Example | Articles Page</title>
</svelte:head>

<div>
	<h2>Articles</h2>
	<div>
		<input type="search" bind:value={query} /><button
			on:click={() => goto(`/articles/search?query=${query}`)}>Search</button
		>
	</div>
	{#each articles as article (article.id)}
		<div><a href="/articles/{article.id}">{article.id}</a></div>
	{/each}
</div>
