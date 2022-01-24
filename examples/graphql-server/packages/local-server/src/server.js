const { join } = require("path");
const { readFile: readFilePromise } = require("fs");
const { promisify } = require("util");
const readFile = promisify(readFilePromise);
const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const mocks = require("./mockdata");
const datasources = require("./datasources");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

module.exports = start;

async function start({ port }) {
  const typeDefs = (
    await readFile(join(__dirname, "../schema.graphql"))
  ).toString();

  const server = new ApolloServer({
    cors: true,
    introspection: true,
    subscriptions: true,
    mocks,
    mockEntireSchema: false,
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      datasources,
      pubsub,
      userToken: (req && req.headers && req.headers.authorization) || "",
    }),
  });

  const { url } = await server.listen(port);

  return {
    stop: async () => await server.stop(),
    url,
  };
}
