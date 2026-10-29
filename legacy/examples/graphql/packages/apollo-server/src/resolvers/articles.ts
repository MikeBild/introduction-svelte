export async function articles(_: never, __: never, { datasources, userToken }: any) {
	console.log({ userToken });
	const articleList = await datasources.articles.list();
	return articleList;
}

export async function article(_: never, { id }: any, { datasources }: any) {
	const article = await datasources.articles.getById(id);
	return article;
}

export async function articleAdd(_: never, __: never, { datasources, pubsub }: any) {
	pubsub.publish('ARTICLE_ADDED', {
		articleAdded: { id: 1, authorId: 22, content: 'abc' }
	});
	return {};
}

export async function articleAdded(_: never, __: never, { datasources }: any) {
	return {};
}
