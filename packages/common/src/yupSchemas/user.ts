import * as yup from 'yup';

export const emailNotLongEnough = 'email must be at least 3 characters';
export const passwordNotLongEnough = 'password must be at least 5 characters';
export const invalidEmail = 'email must be vaild';

export const validUserSchema = yup.object().shape({
	email: yup
		.string()
		.min(3, emailNotLongEnough)
		.max(255)
		.email(invalidEmail)
		.required(),
	password: yup.string().min(5, passwordNotLongEnough).max(255).required(),
});
