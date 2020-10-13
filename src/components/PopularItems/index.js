import React from 'react';
import styles from './PopularItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CustomCard from '../CustomCard';
import Carousel from 'react-bootstrap/Carousel';
import cx from 'classnames';

const cards = [
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item1.png'
	},
	{
		title: 'Activate Facial Mask and Charcoal Soap',
		price: '$ 129.55',
		cardImg: '/img/popularItems/item3.png'
	},
	{
		title: 'Cocktail Table Walnut | YES',
		price: '$ 299.99',
		cardImg: '/img/popularItems/item4.png'
	},
	{
		title: 'Hay - About A Lounge Chair AAL 93',
		price: '$ 659.55',
		cardImg: '/img/popularItems/item5.png'
	},
	{
		title: 'TORY DESK CALENDAR',
		price: '$ 410.99',
		cardImg: '/img/popularItems/item6.png'
	},
	{
		title: 'CH445 Wing Chair on SUITE NY',
		price: '$ 330.55',
		cardImg: '/img/popularItems/item7.png'
	}
];

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

				<Row className={cx("d-xs-block d-sm-block d-md-none", styles.rowSm)}>
					<Carousel prevIcon={null} nextIcon={null} className={styles.carousel}>
						<Carousel.Item>
							<CustomCard 
							 cardImg="/img/popularItems/item2.png"
							 title='Kristina Dam Oak Table With White Marble Top'
							 price='$ 799.55' />
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard 
							 cardImg="/img/popularItems/item3.png"
							 title='Activate Facial Mask and Charcoal Soap'
							 price='$ 129.55' />
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard 
							 cardImg="/img/popularItems/item4.png"
							 title='Cocktail Table Walnut | YES'
							 price='$ 299.99' />
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard 
							 cardImg="/img/popularItems/item5.png"
							 title='Hay - About A Lounge Chair AAL 93'
							 price='$ 659.55' />
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard 
							 cardImg="/img/popularItems/item6.png"
							 title='TORY DESK CALENDAR'
							 price='$ 410.99' />
						</Carousel.Item>
					</Carousel>
				</Row>

				<Row className={cx("d-none d-md-block" , styles.firstRow)}>
					<Col>
						<CardColumns>
							<Card>
								<Card.Img className={styles.cardImg} variant="top" src="/img/popularItems/item2.png" />
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										Hay - About A Lounge Chair AAL 93
									</Card.Title>
									<Card.Text>
										<button className={styles.cardBtn}>
											<span className={styles.cardBtnPrice}>$659.55</span>
											<span className={styles.cardBtnText}>Buy now</span>
										</button>
									</Card.Text>
								</Card.Body>
							</Card>

							{cards.map(({ title, price, cardImg }) => (
								<CustomCard cardImg={cardImg} title={title} price={price} />
							))}

							<Card className={styles.cardBody}>
								<Card.Img className={styles.cardImg} variant="top" src="/img/popularItems/item8.png" />
								<Card.ImgOverlay>
									<div className={styles.imgContainer}>
										<p className={styles.imgText}>
											My dragons are misbehaving again. Unbelieveable!
										</p>
										<p className={styles.imgTime}>
											<img src="/img/popularItems/img-icon.png" className={styles.imgIcon} />5h
											ago
										</p>
									</div>
								</Card.ImgOverlay>
							</Card>
						</CardColumns>
					</Col>
				</Row>
				<Row className="d-none d-md-block">
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
