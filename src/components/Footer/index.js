import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return ( 

<footer>

    <Container className={styles.container}>
        <Row>
            <Col xs={3} className={styles.contactText}>
                <p>© Copyright 2019. <br /> All Rights Reserved.</p>
                <h2 className={styles.contactTitle}>contact</h2>
                <p>Headquarters: <br /> 5600, Blvd. des Galeries, Bur 530 <br /> Québec, Québec G2K 2H6 </p>
                <p>contact@osf-global.com</p>
                <p>+1 (888) 548-4344</p>
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
                        <FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} className={styles.icon} />
                        <FontAwesomeIcon icon={[ 'fab', 'google-plus-g' ]} className={styles.icon}  />
                        <FontAwesomeIcon icon={[ 'fab', 'twitter' ]} className={styles.icon}  />
                        <FontAwesomeIcon icon={[ 'fab', 'pinterest-p' ]} />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>

</footer> 

    );
}
 
export default Footer;