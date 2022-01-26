import { join } from 'path';
import { readFile as readFilePromise } from 'fs';
import { promisify } from 'util';
const readFile = promisify(readFilePromise);
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import mocks from './mockdata';
import * as datasources from './datasources';
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

export async function start({ port, isProd }: any) {
	const typeDefs = (await readFile(join(__dirname, '../schema.graphql'))).toString();

	const server = new ApolloServer({
		cors: true,
		introspection: true,
		mocks,
		mockEntireSchema: false,
		typeDefs,
		resolvers,
		context: ({ req }) => ({
			datasources,
			pubsub,
			userToken: (req && req.headers && req.headers.authorization) || ''
		})
	});

	const { url } = await server.listen(port);

	return {
		stop: async () => await server.stop(),
		url
	};
}
