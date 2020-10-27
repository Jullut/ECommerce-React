import React, { useContext } from 'react';
import { WishContext } from '../Contexts/WishContext';
import '../../assets/globalStyles/style.scss';
import styles from './CustomCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const CustomCard = ({ cardImg, title, price }) => {
	const { addWish } = useContext(WishContext);

	return (
		<Card className={styles.card}>
			<Card.Img className={styles.cardImg} variant="top" src={cardImg} />
			<Card.Body className={styles.cardBody}>
				<Card.Title className={styles.cardTitle}>{title}</Card.Title>
				<Card.Text className={styles.cardPrice}>{price}</Card.Text>
			</Card.Body>
			<div className={styles.overlay}>
				<div className={styles.plus}>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<div className={styles.heart} onClick={() => addWish()}>
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</div>
		</Card>
	);
};

export default CustomCard;
