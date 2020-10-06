import React, { useEffect } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './components//Header/index';
import Sales from './components//Sales/index';

library.add(fab);

function App() {
	useEffect(() => {
		document.title = 'eCommerce';
	}, []);

	return (
		<div className="App">
			<Header />
			<Sales />
		</div>
	);
}

export default App;
