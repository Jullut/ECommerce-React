import React from 'react';
import './style.scss';
import styles from './Sales.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import bg from './img/sales-bg.png';
import bg1 from './img/sales-bg1.png';
import bg2 from './img/sales-bg2.png';
import summer from './img/summer-sales.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Sales = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col xs={9}>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={bg} alt="First slide" />
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.leftCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.leftCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<button className={cx(styles.btnCarousel, styles.leftBtnCarousel)}>
										View more
									</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className={cx(styles.imgBg, 'd-block w-100')} src={bg1} alt="Second slide" />
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.middleCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.middleCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<button className={cx(styles.btnCarousel, styles.middleBtnCarousel)}>
										View more
									</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className={cx(styles.imgBg, 'd-block w-100')} src={bg2} alt="Third slide" />
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.rightCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.rightCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<button className={cx(styles.btnCarousel, styles.rightBtnCarousel)}>
										View more
									</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={bg} alt="Fourth slide" />
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.leftCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.leftCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<button className={cx(styles.btnCarousel, styles.leftBtnCarousel)}>
										View more
									</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className={cx(styles.imgBg, 'd-block w-100')} src={bg1} alt="Fifth slide" />
								<Carousel.Caption>
									<h3 className={cx(styles.titleCarousel, styles.middleCarousel)}>
										{' '}
										Control and manage any device with cloud solutions
									</h3>
									<p className={cx(styles.subTitleCarousel, styles.middleCarousel)}>
										Improve business performance and the user experience with the right mix of IoT
										technology and processes
									</p>
									<button className={cx(styles.btnCarousel, styles.middleBtnCarousel)}>
										View more
									</button>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>

					<Col>
						<Card>
							<Card.Img variant="top" src={summer} />
							<Card.Body>
								<Card.Title>
									<span className={styles.titleSales}>Follow us on Facebook</span>
								</Card.Title>
								<Card.Text>
									<span className={styles.subTitleSales}>
										Sed ut perspiciatis unde omnis iste natus error sit
									</span>
								</Card.Text>
								<form>
									<button className={styles.btnSales} formaction="https://www.facebook.com/">
										<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.fb} />FOLLOW
									</button>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Sales;
