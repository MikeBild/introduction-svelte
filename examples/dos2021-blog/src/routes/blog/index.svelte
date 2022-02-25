<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';

	export async function load({ props }: LoadInput) {
		return {
			status: 200,
			props
		};
	}
</script>

<script>
	export let articles = [];
</script>

{#each articles as { slug, title }}
	<a href="/blog/{slug}">{title}</a>
{/each}
