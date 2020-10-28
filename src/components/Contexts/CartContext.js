import React, { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [ itemsQuantity, setItemsQuantity ] = useState(0);
	const [ items, setItems ] = useState([
		{
			id: uuid(),
			title: 'Kristina Dam Oak Table With White Marble Top',
			price: 2195,
			img: '/img/cart/icon.png'
		}
	]);

	const addItem = () => {
		setItemsQuantity(itemsQuantity + 1);
	};

	const addItemQuantity = (count) => {
		setItemsQuantity(itemsQuantity + count);
	};

	const addItemCart = () => {
		setItems([
			...items,
			{
				id: uuid(),
				title: 'Kristina Dam Oak Table With White Marble Top',
				price: 2195,
				img: '/img/cart/icon.png'
			}
		]);
	};

	const delItem = (id) => {
		setItems(items.filter((items) => items.id !== id));
	};

	return (
		<CartContext.Provider value={{ itemsQuantity, items, addItem, addItemQuantity, addItemCart, delItem }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
