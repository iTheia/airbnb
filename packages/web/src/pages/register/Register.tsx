import * as React from 'react';
import { RegisterView } from '../../components/RegisterView/RegisterView';

export const RegisterConnector = () => {
	const dummySubmit = async (values: any) => {
		console.log(values);
		return null;
	};
	return (
		<div>
			<RegisterView submit={dummySubmit}></RegisterView>
		</div>
	);
};
