import * as React from 'react';
import { FieldProps } from 'formik';
import FormItem from 'antd/lib/form/FormItem';
import { Input } from 'antd';

export const InputField: React.SFC<FieldProps<any>> = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const errorMsg = touched[field.name] && errors[field.name];

	return (
		<FormItem
			label="Username"
			validateStatus={errorMsg ? 'error' : undefined}
			help={errorMsg}
		>
			<Input {...field} {...props} />
		</FormItem>
	);
};
