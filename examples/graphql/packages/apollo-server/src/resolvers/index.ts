import { articles, article, articleAdd } from './articles';
import { search } from './search';
import { posts } from './posts';

export default {
	Post: {
		__resolveType(obj: any, context: any, info: any) {
			console.log({ obj });
			if (obj.content) return 'Article';
			if (obj.text) return 'Comment';

			return null;
		}
	},
	Search: {
		__resolveType(obj: any, context: any, info: any) {
			if (obj.content) return 'Article';
			if (obj.text) return 'Comment';

			return null;
		}
	},
	Query: {
		articles,
		article,
		search,
		posts
	},
	Mutation: { articleAdd },
	Subscription: {
		articleAdded: {
			subscribe: (_: never, __: never, { pubsub }: any) => pubsub.asyncIterator(['ARTICLE_ADDED'])
		}
	}
};
