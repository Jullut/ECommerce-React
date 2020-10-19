import React from 'react';
import styles from './LandingServices.module.scss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Dropdown from 'react-bootstrap/Dropdown';
import CardColumns from 'react-bootstrap/CardColumns';
import CustomCard from '../CustomCard';

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

				<div className={styles.bg}>
					<Row className={styles.row}>
						<Col>
							<Row>
								<Col>
									<span className={styles.dropTitle}>Price</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">$0.00 — $100.00</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
							<Row className={styles.smRow}>
								<Col>
									<span className={styles.dropTitle}>Color</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col>
									<span className={styles.dropTitle}>Brands</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">Ukraine sport</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
							<Row className={styles.smRow}>
								<Col>
									<span className={styles.dropTitle}>Sort by</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">Price</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col>
									<span className={styles.dropTitle}>Size</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">Small</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
							<Row className={styles.smRow}>
								<Col>
									<span className={styles.dropTitle}>Show</span>
								</Col>
								<Col className={styles.col}>
									<Dropdown className={styles.dropdown}>
										<Dropdown.Toggle id="dropdown-basic">16 per page</Dropdown.Toggle>
									</Dropdown>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>

				<Row>
					<Col>
						<CardColumns className={styles.cardColumns}>
							{cards.map(({ title, price, cardImg }) => (
								<CustomCard cardImg={cardImg} title={title} price={price} />
							))}
						</CardColumns>
					</Col>
				</Row>

				<Row>a</Row>
			</Container>
		</div>
	);
};

export default LandingServices;
