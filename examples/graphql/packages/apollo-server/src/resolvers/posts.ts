export async function posts(_: never, __: never, { datasources }: any) {
	const articleList = await datasources.articles.list();
	return [...articleList, { id: 1, text: 'A comment!' }];
}
