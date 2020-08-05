import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../graphql-types/MyContext';
import { ApolloError } from 'apollo-server-express';

export const isAuth: MiddlewareFn<MyContext> = async (
	{ context: MyContext },
	next
) => {
	if (false) {
		throw new ApolloError('you must sing in');
	}
	return next();
};
