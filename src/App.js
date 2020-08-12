/** @format */

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '@Views/Dashboard';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Dashboard} />
			</Switch>
		</Router>
	);
};
export default App;
