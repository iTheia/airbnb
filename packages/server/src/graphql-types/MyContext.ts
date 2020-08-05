import { Request, Response } from 'express';
import { validate } from 'class-validator';

export class MyContext {
	req: Request;

	response: Response;
}
validate(MyContext);
