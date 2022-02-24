export interface Article {
	title: string;
	slug: string;
}

export async function get() {
	const articles = await Promise.all(
		Object.entries(import.meta.glob('./*.svelte.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.replace('.svelte.md', '');
			return { ...metadata, slug };
		})
	);

	return {
		status: 200,
		body: { articles }
	};
}
