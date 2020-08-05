import { Resolver, Mutation, Arg, Query, Ctx } from 'type-graphql';
import { AuthInput } from '../graphql-types/AuthInput';
import { UserResponse } from '../graphql-types/UserResponse';
import { hash, compare } from 'bcrypt';
import { User } from '../entity/User';
import { MyContext } from '../graphql-types/MyContext';
import { validUserSchema } from '@arbnb/common';
import { validate } from 'class-validator';

const invalidLoginResponse = {
	errors: [
		{
			path: 'email or password',
			message: 'Invalid login',
		},
	],
};

@Resolver()
export class AuthResolver {
	@Mutation(() => UserResponse)
	async register(@Arg('input') input: AuthInput): Promise<UserResponse> {
		try {
			const { email, password, firstName, lastName, href } = input;
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				return {
					errors: [
						{
							path: 'email',
							message: 'alredy in use',
						},
					],
				};
			}
			const hashedPassword = await hash(password, 12);
			const user = await User.create({
				email,
				password: hashedPassword,
				firstName,
				lastName,
				href,
			}).save();
			return { user };
		} catch (error) {
			return {
				errors: [
					{
						path: error,
						message: error,
					},
				],
			};
		}
	}

	@Mutation(() => UserResponse)
	async login(
		@Arg('input') { email, password }: AuthInput,
		@Ctx() ctx: MyContext
	): Promise<UserResponse> {
		try {
			const user = await User.findOne({ email });
			if (!user) {
				return invalidLoginResponse;
			}
			const validPassword = await compare(password, user.password);
			if (!validPassword) {
				return invalidLoginResponse;
			}
			return { user };
		} catch (error) {
			return {
				errors: error,
			};
		}
	}

	@Query(() => String, { nullable: true })
	async me(@Ctx() ctx: MyContext): Promise<string | undefined> {
		/* if(ctx.req.ci) */
		return 'hi';
	}
}
validate(AuthResolver);
