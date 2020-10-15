import React from 'react';
import '../../App.scss';
import '../../assets/globalStyles/style.scss';
import Header from '../Header';
import Footer from '../Footer';

export const Layout = ({ children }) => {
	return (
		<div className="App">
			<Header />
			{children}
			<Footer />
		</div>
	);
};
