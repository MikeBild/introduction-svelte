<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { request, gql } from 'graphql-request';

	let search = [];

	onMount(async () => {
		const query = $page.url.searchParams.get('query');

		const data = await request(
			'http://localhost:8080/graphql',
			gql`
				query Search($query: String!) {
					search(query: $query) {
						__typename
						... on Article {
							id
							authorId
							content
							releasedAt
						}
						... on Comment {
							id
							authorId
							text
						}
					}
				}
			`,
			{ query }
		);
		search = data.search;
	});
</script>

<svelte:head>
	<title>SvelteKit Example | Search Page</title>
</svelte:head>

<div>
	<h2>Articles</h2>
	<div><input type="search" /><button>Search</button></div>
	{#each search as item}
		<div><a href="/articles/{item.id}">{item.__typename} {item.id}</a></div>
	{/each}
</div>
