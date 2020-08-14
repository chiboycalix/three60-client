/** @format */

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Todo from '@Container/Todo/TodoLayout'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Todo} />
			</Switch>
		</Router>
	);
};
export default App;
