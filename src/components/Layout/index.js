import React from 'react';
import '../../App.scss';
import '../../assets/globalStyles/style.scss';
import Header from '../Header';
import Footer from '../Footer';
import WishContextProvider from '../Contexts/WishContext';
import CartContextProvider from '../Contexts/CartContext';

export const Layout = ({ children }) => {
	return (
		<div className="App">
			<CartContextProvider>
				<WishContextProvider>
					<Header />
					{children}
					<Footer />
				</WishContextProvider>
			</CartContextProvider>
		</div>
	);
};
