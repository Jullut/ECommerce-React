import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Arrow = ({ clicked, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>contact</h2>
			<span>
				<FontAwesomeIcon icon={clicked ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const Arrow1 = ({ clicked1, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>Categoriest</h2>
			<span>
				<FontAwesomeIcon icon={clicked1 ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

const Arrow2 = ({ clicked2, onClick }) => {
	return (
		<div onClick={onClick} className={styles.cardHeader}>
			<h2 className={styles.contactTitle}>About</h2>
			<span>
				<FontAwesomeIcon icon={clicked2 ? faCaretUp : faCaretDown} />
			</span>
		</div>
	);
};

export default class Footer extends Component {
	state = { clicked: false, clicked1: false, clicked2: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	handleClick1 = () => {
		this.setState({ clicked1: !this.state.clicked1 });
	};
	handleClick2 = () => {
		this.setState({ clicked2: !this.state.clicked2 });
	};

	render() {
		return (
			<footer>
				<Container className={styles.container}>
					{/* MOBILE */}

					<Row className="d-xs-flex d-sm-flex d-md-none">
						<Col className={styles.contactText}>
							<p className={styles.copyright}>
								© Copyright 2019. <br /> All Rights Reserved.
							</p>
							<Accordion>
								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="0" className={styles.cardHeader}>
										<Arrow clicked={this.state.clicked} onClick={this.handleClick} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body className={styles.cardBody}>
											<p>
												Headquarters: <br /> 5600, Blvd. des Galeries, Bur 530 <br /> Québec,
												Québec G2K 2H6{' '}
											</p>
											<p>
												<a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
											</p>
											<p>
												<a href="tel:18885484344">+1 (888) 548-4344</a>
											</p>
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="1" className={styles.cardHeader}>
										<Arrow1 clicked1={this.state.clicked1} onClick={this.handleClick1} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="1">
										<Card.Body className={styles.cardBody}>
											<a>Alcohol</a> <br />
											<a>Art</a> <br />
											<a>Books</a> <br />
											<a>Drink</a> <br />
											<a>Electronics</a>
											<a>Home</a> <br />
											<a>Jewelry</a> <br />
											<a>Kids & Baby</a> <br />
											<a>Men's Fashion</a> <br />
											<a>Mobile</a> <br />
											<a>Motorcycles</a> <br />
											<a>Movies</a> <br />
											<a>Music</a>
											<a>Sport</a> <br />
											<a>Toys</a> <br />
											<a>Travel</a> <br />
											<a>Women's Fashion</a>
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="2" className={styles.cardHeader}>
										<Arrow2 clicked2={this.state.clicked2} onClick={this.handleClick2} />
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="2">
										<Card.Body className={styles.cardBody}>
											<a>About us</a> <br />
											<a>Delivery</a> <br />
											<a>Testimonials</a> <br />
											<a>Contact</a>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<span className={styles.icons}>
								<a href="https://www.facebook.com/">
									<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.icon} />
								</a>
								<a href="https://www.google.com.ua/">
									<FontAwesomeIcon icon={[ 'fab', 'google-plus-g' ]} className={styles.icon} />
								</a>
								<a href="https://twitter.com/">
									<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.icon} />
								</a>
								<a href="https://www.pinterest.com/">
									<FontAwesomeIcon icon={[ 'fab', 'pinterest-p' ]} />
								</a>
							</span>
						</Col>
					</Row>

					{/* DESKTOP */}

					<Row className="d-none d-md-flex">
						<Col xs={3} className={styles.contactText}>
							<p>
								© Copyright 2019. <br /> All Rights Reserved.
							</p>
							<h2 className={styles.contactTitle}>contact</h2>
							<p>
								Headquarters: <br /> 5600, Blvd. des Galeries, Bur 530 <br /> Québec, Québec G2K 2H6{' '}
							</p>
							<p>
								<a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
							</p>
							<p>
								<a href="tel:18885484344">+1 (888) 548-4344</a>
							</p>
						</Col>

						<Col xs={6}>
							<Row>
								<Col>
									<h1 className={styles.footTitle}>Categoriest</h1>
								</Col>
							</Row>
							<Row className={styles.footItem}>
								<Col>
									<a>Alcohol</a> <br />
									<a>Art</a> <br />
									<a>Books</a> <br />
									<a>Drink</a> <br />
									<a>Electronics</a>
								</Col>
								<Col>
									<a>Home</a> <br />
									<a>Jewelry</a> <br />
									<a>Kids & Baby</a> <br />
									<a>Men's Fashion</a> <br />
									<a>Mobile</a> <br />
									<a>Motorcycles</a> <br />
									<a>Movies</a> <br />
									<a>Music</a>
								</Col>
								<Col>
									<a>Sport</a> <br />
									<a>Toys</a> <br />
									<a>Travel</a> <br />
									<a>Women's Fashion</a>
								</Col>
							</Row>
						</Col>

						<Col xs={1}>
							<Row>
								<Col>
									<h1 className={styles.footTitle}>About</h1>
								</Col>
							</Row>
							<Row className={styles.footItem}>
								<Col>
									<a>About us</a> <br />
									<a>Delivery</a> <br />
									<a>Testimonials</a> <br />
									<a>Contact</a>
								</Col>
							</Row>
						</Col>

						<Col xs={2}>
							<Row className={styles.icons}>
								<Col>
									<a href="https://www.facebook.com/">
										<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.icon} />
									</a>
									<a href="https://www.google.com.ua/">
										<FontAwesomeIcon icon={[ 'fab', 'google-plus-g' ]} className={styles.icon} />
									</a>
									<a href="https://twitter.com/">
										<FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.icon} />
									</a>
									<a href="https://www.pinterest.com/">
										<FontAwesomeIcon icon={[ 'fab', 'pinterest-p' ]} />
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
