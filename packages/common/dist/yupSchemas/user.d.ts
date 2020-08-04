import * as yup from 'yup';
export declare const emailNotLongEnough = "email must be at least 3 characters";
export declare const passwordNotLongEnough = "password must be at least 5 characters";
export declare const invalidEmail = "email must be vaild";
export declare const validUserSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    password: string;
}>>;
