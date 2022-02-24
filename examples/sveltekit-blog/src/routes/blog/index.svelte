<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import type { Article } from './index';

	export async function load({ props }: LoadInput) {
		return {
			status: 200,
			props
		};
	}
</script>

<script lang="ts">
	export let articles: Article[] = [];
</script>

<h1>Blog Posts</h1>

<ul>
	{#each articles as article}
		<li><a href={`/blog/${article.name}`}>{article.metadata.title}</a></li>
	{/each}
</ul>
