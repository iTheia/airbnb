import { InputType, Field } from 'type-graphql';
import { v4 as uuid } from 'uuid';
import { validate, IsEmail } from 'class-validator';

@InputType()
export class AuthInput {
	@Field()
	@IsEmail()
	email: string;

	@Field()
	password: string;

	@Field()
	firstName?: string;

	@Field({ defaultValue: uuid() })
	href: string;

	@Field()
	lastName?: string;
}

validate(AuthInput);
