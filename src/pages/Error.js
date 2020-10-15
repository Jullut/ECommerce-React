import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import notFound from '../components//notFound';

export const Error = () => {
	useEffect(() => {
		document.title = '404';
	}, []);

	return (
		<div className="App">
			<notFound />
		</div>
	);
};
