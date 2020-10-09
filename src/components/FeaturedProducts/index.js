import React, { Component } from 'react';
import styles from './FeaturedProducts.module.scss';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cx from 'classnames';

export default class FeaturedProducts extends Component {

	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	  }
	  next() {
		this.slider.slickNext();
	  }
	  previous() {
		this.slider.slickPrev();
	  }
	  render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false
		};

	return (
		<div>
			<Container className={styles.bg}>
				<Row>
					<Col>
						<h1 className={styles.mainText}>Featured Products</h1>
						<p className={styles.subText}>Unde omnis iste natus error sit voluptatem</p>
						<div className={styles.border}>
							<img src="/img/featuredProducts/icon.png" />
						</div>
						<img onClick={this.previous} src="/img/featuredProducts/prev.png" className={styles.prev} />
						<img onClick={this.next} src="/img/featuredProducts/next.png" className={styles.next} />
					</Col>
				</Row>

				<Row className={styles.secondRow}>
					<Col>
						<Slider ref={c => (this.slider = c)} {...settings} slickPrev={null}>
							<div>
								<Card className={styles.card}>
									<Card.Img slassName={styles.cardImg} variant="top" src="/img/featuredProducts/prod1.png" />
  									<Card.Body>
										<Card.Title className={styles.cardMainText}>Kristina Dam Oak Table With White Marble</Card.Title>
										<Card.Text className={styles.cardSubText}>
										Awesome
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div>
								<Card className={styles.card}>
									<Card.Img slassName={styles.cardImg} variant="top" src="/img/featuredProducts/prod2.png" />
									<Card.Body>
										<Card.Title className={styles.cardMainText}>Kristina Dam Oak Table With White Marble</Card.Title>
										<Card.Text className={styles.cardSubText}>
										Marketing
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div>
								<Card className={styles.card}>
									<Card.Img slassName={styles.cardImg} variant="top" src="/img/featuredProducts/prod3.png" />
									<Card.Body>
										<Card.Title className={styles.cardMainText}>Kristina Dam Oak Table With White Marble</Card.Title>
										<Card.Text className={styles.cardSubText}>
										Awesome
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div>
								<Card className={styles.card}>
									<Card.Img slassName={styles.cardImg} variant="top" src="/img/featuredProducts/prod4.png" />
									<Card.Body className={styles.cardHeight}>
										<Card.Title className={cx(styles.cardMainText, styles.cardDown)}>Hezy Theme</Card.Title>
										<Card.Text className={styles.cardSubText}>
										Marketing
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div>
								<Card className={styles.card}>
									<Card.Img slassName={styles.cardImg} variant="top" src="/img/featuredProducts/prod2.png" />
									<Card.Body>
										<Card.Title className={styles.cardMainText}>Kristina Dam Oak Table With White Marble</Card.Title>
										<Card.Text className={styles.cardSubText}>
										Marketing
										</Card.Text>
									</Card.Body>
								</Card>
							</div>		
    					</Slider>
					</Col>
				</Row>
			</Container>
		</div>
	);

}
}
