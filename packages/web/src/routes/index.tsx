import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegisterConnector } from '../modules/register/RegisterConnector';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/register" component={RegisterConnector} />
			</Switch>
		</BrowserRouter>
	);
};
