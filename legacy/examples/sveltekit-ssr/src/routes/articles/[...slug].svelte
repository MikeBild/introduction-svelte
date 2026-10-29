<script context="module">
	import { request, gql } from 'graphql-request';

	export const load = async ({ params }) => {
		const { article } = await request(
			'http://localhost:8080/graphql',
			gql`
				query ArticleById($id: ID!) {
					article(id: $id) {
						id
						text: content
					}
				}
			`,
			{ id: params.slug }
		);

		return { props: { article } };
	};
</script>

<script>
	export let article;
</script>

<svelte:head>
	<title>SvelteKit Example | Article {article.id} Page</title>
</svelte:head>

<div>
	<h2>Artice {article.id}</h2>
	<p>{article.text}</p>
</div>
