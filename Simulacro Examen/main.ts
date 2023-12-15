import { ApolloServer, } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";



import { Query } from "./resolvers/query.ts";
import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";
import { typeDefs } from "./schema.ts";

const resolvers = {
  Query,
  Character,
  Episode,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);