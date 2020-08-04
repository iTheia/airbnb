import * as React from 'react';
import { RegisterView } from './view/RegisterView';

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
