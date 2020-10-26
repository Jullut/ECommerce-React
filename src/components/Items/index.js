import React from 'react';
import '../../assets/globalStyles/style.scss';
import styles from './Items.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

const Items = ({ itemsToRender }) => {
	return (
		<div>
			{itemsToRender.map(({ title, price, cardImg }) => (
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
						<div className={styles.heart}>
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
				</Card>
			))}
		</div>
	);
};

export default Items;
