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
	export let articles;
</script>

<svelte:head>
	<title>SvelteKit Example | Articles Page</title>
</svelte:head>

<div>
	<h2>Articles</h2>

	{#each articles as article (article.id)}
		<div><a href="/articles/{article.id}">{article.id}</a></div>
	{/each}
</div>
