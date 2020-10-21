import React from 'react';
import styles from './LandingServices.module.scss';
import Filter from '../Filter';
import CustomCard from '../CustomCard';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardColumns from 'react-bootstrap/CardColumns';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const cards = [
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item3.png'
	},
	{
		title: 'EAMES x Cast + Crew - Custom Powder Coated ',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item1.png'
	},
	{
		title: 'Activate Facial Mask and Charcoal Soap ',
		price: '$ 129.55',
		cardImg: '/img/popularItems/item12.png'
	},
	{
		title: 'Vitra Cork Stool B, Cork - Design Within Reach',
		price: '$ 299.99',
		cardImg: '/img/popularItems/item9.png'
	},
	{
		title: 'Hay - About A Lounge Chair AAL 93',
		price: '$ 659.55',
		cardImg: '/img/popularItems/item6.png'
	},
	{
		title: 'TORY DESK CALENDAR',
		price: '$ 410.99',
		cardImg: '/img/popularItems/item5.png'
	},
	{
		title: 'CH445 Wing Chair on SUITE NY',
		price: '$ 330.55',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'CH445 Wing Chair on SUITE NY',
		price: '$ 330.55',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 2195.00',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'MONOQI | Ø55 Crossit Table - Wht/Grn',
		price: '$ 299.99',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'Hay - About A Lounge Chair AAL 93',
		price: '$ 659.55',
		cardImg: '/img/popularItems/item6.png'
	},
	{
		title: 'Vitra Cork Stool B, Cork - Design Within Reach',
		price: '$ 870.95',
		cardImg: '/img/popularItems/item6.png'
	},
	{
		title: 'Hay - About A Lounge Chair AAL 93',
		price: '$ 659.55',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'TORY DESK CALENDAR',
		price: '$ 410.99',
		cardImg: '/img/popularItems/item7.png'
	},
	{
		title: 'EAMES x Cast + Crew - Custom Powder Coated',
		price: '$ 330.55',
		cardImg: '/img/popularItems/item11.png'
	},
	{
		title: 'CH445 Wing Chair on SUITE NY',
		price: '$ 330.55',
		cardImg: '/img/popularItems/item10.png'
	}
];

const cardsSm = [
	{
		title: 'Kristina Dam Oak Table With White Marble Top',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item3.png'
	},
	{
		title: 'EAMES x Cast + Crew - Custom Powder Coated ',
		price: '$ 799.55',
		cardImg: '/img/popularItems/item1.png'
	},
	{
		title: 'Activate Facial Mask and Charcoal Soap ',
		price: '$ 129.55',
		cardImg: '/img/popularItems/item10.png'
	},
	{
		title: 'Vitra Cork Stool B, Cork - Design Within Reach',
		price: '$ 299.99',
		cardImg: '/img/popularItems/item10.png'
	}
];

const LandingServices = () => {
	return (
		<div>
			<Container className={styles.container}>
				<Row>
					<Col>
						<Breadcrumb className={styles.breadcrumb}>
							<Breadcrumb.Item>
								<Link to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>Category Landing Services</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>

				<Row>
					<Col>
						<h1 className={styles.mainTitle}>Services</h1>
					</Col>
				</Row>

				<Row className="d-xs-flex d-sm-flex d-md-none">
					<Col>
						<Accordion defaultActiveKey="0">
							<Card className={styles.card}>
								<Card.Header className={styles.cardHeader}>
									<Accordion.Toggle variant="link" eventKey="0">
										Hide Filter
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body className={styles.cardBody}>
										<Filter />
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>

				<div className="d-none d-md-flex">
					<Filter />
				</div>

				<Row>
					<Col>
						<p className={styles.results}>
							<span className={styles.resultNum}>12,931</span> results in apparel
						</p>
					</Col>
				</Row>

				<Row>
					<Col className="d-none d-md-flex">
						<CardColumns className={styles.cardColumns}>
							{cards.map(({ title, price, cardImg }) => (
								<CustomCard cardImg={cardImg} title={title} price={price} />
							))}
						</CardColumns>
					</Col>

					<Col className="d-xs-flex d-sm-flex d-md-none">
						<CardColumns className={styles.cardColumns}>
							{cardsSm.map(({ title, price, cardImg }) => (
								<CustomCard cardImg={cardImg} title={title} price={price} />
							))}
						</CardColumns>
					</Col>
				</Row>

				<Row>
					<Col>
						<button className={styles.btn}>load more</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LandingServices;
