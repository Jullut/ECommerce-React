import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { CategoryServices } from './pages/CategoryServices';
import { Layout } from './components/Layout';

const Router = () => {
	return (
		<Switch>
			<Layout>
				<Route component={Home} path="/" exact />
				<Route component={Error} path="/error" exact />
				<Route component={CategoryServices} path="/categories" exact />
			</Layout>
		</Switch>
	);
};

export default Router;
