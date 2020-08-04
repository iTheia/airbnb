import * as React from 'react';
import { validUserSchema } from '@arbnb/common';
import { Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { withFormik, FormikErrors, Field, Form } from 'formik';
import { InputField } from '../InputField/InputField';

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const View = () => (
	<div className="container">
		<Form className="form__container">
			<Field
				name="email"
				placeholder="Email"
				component={InputField}
			></Field>
			<Field
				name="password"
				placeholder="Password"
				component={InputField}
			></Field>
			<FormItem>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</FormItem>
		</Form>
	</div>
);

export const RegisterView = withFormik<Props, FormValues>({
	validationSchema: validUserSchema,
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
		const errors = await props.submit(values);
		if (errors) {
			setErrors(errors);
		}
	},
})(View);
