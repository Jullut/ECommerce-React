import React, { useEffect } from 'react';
import './App.scss';
import Header from './components//Header/index';

function App() {
	useEffect(() => {
		document.title = 'eCommerce';
	}, []);

	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
