import fs from 'fs';
const { readdir } = fs.promises;

export interface Article {
	name: string;
	metadata: { [key: string]: string };
}

export async function get() {
	const articleFiles = await readdir(`src/routes/blog`);
	const articles = await Promise.all(
		articleFiles
			.filter((fileName: string) => /.+\.md$/.test(fileName))
			.map(async (name: string) => ({
				name: name.replace('.svelte.md', ''),
				metadata: (await import(`./${name}`)).metadata
			}))
	);

	return {
		status: 200,
		body: { articles }
	};
}
