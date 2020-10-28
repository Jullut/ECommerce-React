import React, { useContext, useState } from 'react';
import styles from './CartItem.module.scss';
import { CartContext } from '../Contexts/CartContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const CartItem = ({ item }) => {
	const { delItem } = useContext(CartContext);
	const [ count, setCount ] = useState(1);

	const priceNow = item.price * count;

	return (
		<div className={styles.div}>
			<Row>
				<Col xs={2}>
					<img src={item.img} className={styles.img} />
				</Col>
				<Col xs={5}>
					<h1 className={styles.title}>{item.title}</h1>
					<p className={styles.smPrice}> $ {priceNow}</p>
				</Col>
				<Col xs={2}>
					<InputGroup className={styles.inputGroup}>
						<InputGroup.Prepend>
							<InputGroup.Text className={styles.minus} id="minus" onClick={() => setCount(count - 1)}>
								-
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							className={styles.formControl}
							placeholder={` ${count}`}
							aria-label="quantity"
							aria-describedby="quantity"
							value={` ${count}`}
							onChange={(e) => ({
								count: e.target.value.replace(/\D/, '')
							})}
							required
						/>
						<InputGroup.Append>
							<InputGroup.Text className={styles.plus} id="plus" onClick={() => setCount(count + 1)}>
								+
							</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Col>
				<Col xs={2}>
					<p className={styles.bigPrice}> $ {priceNow}</p>
				</Col>
				<Col xs={1}>
					<button onClick={() => delItem(item.id)} className={styles.btn}>
						<p>x</p>
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default CartItem;
