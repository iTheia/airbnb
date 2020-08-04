import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
/* import { buildSchema } from 'type-graphql'; */

export const startServer = async () => {
	const app = express();

	await createConnection();

	const apolloServer = new ApolloServer({
		context: ({ req, res } : any) => ({ req, res }),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(4000);
};
