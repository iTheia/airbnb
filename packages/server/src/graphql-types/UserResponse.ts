import { ObjectType, Field } from 'type-graphql';
import { User } from '../entity/User';
import { validate } from 'class-validator';
import { FieldError } from './FieldError';

@ObjectType()
export class UserResponse {
	@Field(() => User, { nullable: true })
	user?: User;

	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];
}
validate(UserResponse);
