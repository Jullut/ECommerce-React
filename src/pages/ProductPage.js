import React, { useEffect } from 'react';
import '../App.scss';
import '../assets/globalStyles/style.scss';
import RuffleCardigan from '../components//RuffleCardigan';

export const ProductPage = () => {
	useEffect(() => {
		document.title = 'Ruffle Cardigan';
	}, []);

	return (
		<div className="App">
			<RuffleCardigan />
		</div>
	);
};
