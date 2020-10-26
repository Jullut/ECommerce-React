import React from 'react';
import styles from './PopularItemsLight.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CustomCard from '../CustomCard';
import Carousel from 'react-bootstrap/Carousel';

const cards = [
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item11.png'
	},
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 2195.00',
		cardImg: '/img/popularItems/item13.png'
	},
	{
		title: 'Activate Facial Mask and Charcoal Soap',
		price: '$ 129.55',
		cardImg: '/img/popularItems/item4.png'
	},
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 629.99',
		cardImg: '/img/popularItems/item14.png'
	}
];

const PopularItemsLight = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<h1 className={styles.mainTitle}>Popular items</h1>
					</Col>
				</Row>

				<Row className="d-xs-block d-sm-block d-md-none">
					<Carousel prevIcon={null} nextIcon={null} className={styles.carousel}>
						<Carousel.Item>
							<CustomCard
								cardImg="/img/popularItems/item11.png"
								title="Kristina Dam Oak Table With White Marble Top"
								price="$ 799.55"
							/>
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard
								cardImg="/img/popularItems/item13.png"
								title="Kristina Dam Oak Table With White Marble Top"
								price="$ 2195.00"
							/>
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard
								cardImg="/img/popularItems/item4.png"
								title="Activate Facial Mask and Charcoal Soap"
								price="$ 129.55"
							/>
						</Carousel.Item>

						<Carousel.Item>
							<CustomCard
								cardImg="/img/popularItems/item14.png"
								title="Kristina Dam Oak Table With White Marble Top"
								price="$ 629.99"
							/>
						</Carousel.Item>
					</Carousel>
				</Row>

				<Row className="d-none d-md-block">
					<Col>
						<CardColumns>
							{cards.map(({ title, price, cardImg }) => (
								<CustomCard cardImg={cardImg} title={title} price={price} />
							))}
						</CardColumns>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PopularItemsLight;
