import React from 'react';
import '../../App.scss';
import '../../assets/globalStyles/style.scss';
import Header from '../Header';
import Footer from '../Footer';
import WishContextProvider from '../Contexts/WishContext';

export const Layout = ({ children }) => {
	return (
		<div className="App">
			<WishContextProvider>
				<Header />
				{children}
				<Footer />
			</WishContextProvider>
		</div>
	);
};
