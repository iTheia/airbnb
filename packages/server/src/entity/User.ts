import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Field()
	@Column()
	password: string;

	@Field()
	@Column()
	email: string;
}
