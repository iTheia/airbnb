import * as React from 'react';
import { RegisterController } from '@arbnb/controller/dist';
import { RegisterView } from '../../components/RegisterView/RegisterView';

export const RegisterConnector = () => {
	return (
		<div>
			<RegisterController>
				{({ submit }) => <RegisterView submit={submit} />}
			</RegisterController>
		</div>
	);
};
