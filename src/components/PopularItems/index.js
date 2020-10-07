import React from 'react';
import '../../Assets/globalStyles/style.scss';
import styles from './PopularItems.module.scss';
import item1 from './img/item1.png';
import item2 from './img/item2.png';
import item3 from './img/item3.png';
import item4 from './img/item4.png';
import item5 from './img/item5.png';
import item6 from './img/item6.png';
import item7 from './img/item7.png';
import item8 from './img/item8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

const PopularItems = () => {
	return (
		<div>
			<Container className={styles.bg}>
				<Row>
					<Col>
						<h1 className={styles.mainTitle}>
							<span>Popular Items</span>
						</h1>
						<div className={styles.border} />
					</Col>
				</Row>
				<Row className={styles.firstRow}>
					<Col>
						<CardColumns>
							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item1} />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										Kristina Dam Oak Table With White Marble Top
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 799.55</Card.Text>
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

							<Card>
								<Card.Img className={styles.cardImg} variant="top" src={item2} />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										Hay - About A Lounge Chair AAL 93
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$659.55</Card.Text>
								</Card.Body>
							</Card>

							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item3} />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										Activate Facial Mask and Charcoal Soap{' '}
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 129.55</Card.Text>
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

							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item4} />
								<Card.Body>
									<Card.Title className={cx(styles.cardTitle, styles.height)}>
										Cocktail Table Walnut | YES
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 299.99</Card.Text>
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

							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item5} />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										Hay - About A Lounge Chair AAL 93
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 659.55</Card.Text>
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

							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item6} />
								<Card.Body>
									<Card.Title className={cx(styles.cardTitle, styles.height)}>
										TORY DESK CALENDAR
									</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 410.99</Card.Text>
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

							<Card className={styles.card}>
								<Card.Img className={styles.cardImg} variant="top" src={item7} />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>CH445 Wing Chair on SUITE NY</Card.Title>
									<Card.Text className={styles.cardPrice}>$ 330.55</Card.Text>
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

							<Card>
								<Card.Img className={styles.cardImg} variant="top" src={item8} />
							</Card>
						</CardColumns>
					</Col>
				</Row>
				<Row>
					<Col>
						<button className={styles.btn}>
							load more <FontAwesomeIcon icon={faUndoAlt} className={styles.undo} />
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PopularItems;
