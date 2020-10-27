import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import styles from './CartNavList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const CartNavList = () => {
	const { itemsQuantity } = useContext(CartContext);
	return (
		<div>
			<FontAwesomeIcon icon={faShoppingBag} />
			<div className={styles.quantity}>
				<span>{itemsQuantity}</span>
			</div>
		</div>
	);
};

export default CartNavList;
