import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validUserSchema } from '@arbnb/common';
const FormItem = Form.Item;

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

const View = (props: FormikProps<FormValues> & Props) => {
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		touched,
		errors,
	} = props;
	return (
		<div className="container">
			<form className="form__container" onSubmit={handleSubmit}>
				<FormItem
					label="Username"
					validateStatus={
						touched.email && errors.email ? 'error' : undefined
					}
					help={touched.email && errors.email ? errors.email : ''}
				>
					<Input
						value={values.email}
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</FormItem>
				<FormItem
					label="Password"
					validateStatus={
						touched.password && errors.password
							? 'error'
							: undefined
					}
					help={
						touched.password && errors.password
							? errors.password
							: ''
					}
				>
					<Input.Password
						value={values.password}
						name="password"
						onChange={handleChange}
					/>
				</FormItem>

				<FormItem {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</FormItem>
			</form>
		</div>
	);
};

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
