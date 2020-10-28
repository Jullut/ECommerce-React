import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [ itemsQuantity, setItemsQuantity ] = useState(0);

	const addItem = () => {
		setItemsQuantity(itemsQuantity + 1);
	};

	const addItemQuantity = (count) => {
		setItemsQuantity(itemsQuantity + count);
	};

	return (
		<CartContext.Provider value={{ itemsQuantity, addItem, addItemQuantity }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
