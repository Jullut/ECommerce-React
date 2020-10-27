import React from 'react';
import styles from './Header.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegistrationForm from '../RegistrationForm/';
import WishList from '../WishList/';

const Header = () => {
	return (
		<header>
			<Container className={styles.container}>
				<Navbar collapseOnSelect expand="lg">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand href="#">
						<Link to="/">
							<img src="/img/header/logo.png" className="d-inline-block align-top mr-2" alt="OSF logo" />
						</Link>
						<div className="d-md-inline-block align-middle d-none">
							<span className={cx(styles.logoText, 'd-block pb-2')}>OSF</span>
							<span className={cx(styles.logoTextSub, 'd-block pt-2')}>Academy</span>
						</div>
					</Navbar.Brand>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className={cx(styles.nav, 'ml-auto align-middle')} variant="tabs">
							<NavDropdown className="position-static" title="SERVICES" id="collasible-nav-dropdown">
								<div className={styles.navContainer}>
									<Row className={styles.row}>
										<Col xs={6}>
											<Row>
												<Col>
													<NavDropdown.Header>PRODUCT CATEGORIES</NavDropdown.Header>
												</Col>
											</Row>

											<Row>
												<Col>
													<NavDropdown.Item>
														<Link to="/error">Accessories</Link>
													</NavDropdown.Item>
													<NavDropdown.Item href="#">Alcohol</NavDropdown.Item>
													<NavDropdown.Item href="#">Art</NavDropdown.Item>
													<NavDropdown.Item href="#">Books</NavDropdown.Item>
													<NavDropdown.Item href="#">Drink</NavDropdown.Item>
													<NavDropdown.Item href="#">Electronics</NavDropdown.Item>
													<NavDropdown.Item href="#">Flowers & Plants</NavDropdown.Item>
													<NavDropdown.Item href="#">Food</NavDropdown.Item>
												</Col>

												<Col>
													<NavDropdown.Item href="#">Gadgets</NavDropdown.Item>
													<NavDropdown.Item href="#">Garden</NavDropdown.Item>
													<NavDropdown.Item href="#">Grocery</NavDropdown.Item>
													<NavDropdown.Item href="#">Home</NavDropdown.Item>
													<NavDropdown.Item href="#">Jewelry</NavDropdown.Item>
													<NavDropdown.Item href="#">Kids & Baby</NavDropdown.Item>
													<NavDropdown.Item href="#">Men's Fashion</NavDropdown.Item>
													<NavDropdown.Item href="#">Mobile</NavDropdown.Item>
												</Col>

												<Col>
													<NavDropdown.Item href="#">Motorcycles</NavDropdown.Item>
													<NavDropdown.Item href="#">Movies</NavDropdown.Item>
													<NavDropdown.Item href="#">Music</NavDropdown.Item>
													<NavDropdown.Item href="#">Office</NavDropdown.Item>
													<NavDropdown.Item href="#">Pets</NavDropdown.Item>
													<NavDropdown.Item href="#">Romantic</NavDropdown.Item>
													<NavDropdown.Item href="#">Sport</NavDropdown.Item>
													<NavDropdown.Item href="#">Toys</NavDropdown.Item>
												</Col>
											</Row>
										</Col>

										<Col xs={2}>
											<Row>
												<Col>
													<NavDropdown.Header>SALE</NavDropdown.Header>
												</Col>
											</Row>

											<Row>
												<Col>
													<NavDropdown.Item href="#">Accessories</NavDropdown.Item>
													<NavDropdown.Item href="#">Alcohol</NavDropdown.Item>
													<NavDropdown.Item href="#">Art</NavDropdown.Item>
													<NavDropdown.Item href="#">Books</NavDropdown.Item>
													<NavDropdown.Item href="#">Drink</NavDropdown.Item>
													<NavDropdown.Item href="#">Electronics</NavDropdown.Item>
													<NavDropdown.Item href="#">Flowers & Plants</NavDropdown.Item>
													<NavDropdown.Item href="#">Food</NavDropdown.Item>
												</Col>
											</Row>
										</Col>

										<Col xs={3}>
											<img
												src="/img/header/nav_img.png"
												rounded
												className={cx(styles.navImg, 'd-none d-md-block')}
											/>
										</Col>
									</Row>
								</div>
							</NavDropdown>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									COMPANY
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									LIBRARY
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={styles.navText} href="#">
									CONTACT US
								</Nav.Link>
							</Nav.Item>
							<NavDropdown title="EN" id="collasible-nav-dropdown" className="d-md-block d-none">
								<NavDropdown.Item href="#">RU</NavDropdown.Item>
								<NavDropdown.Item href="#">UA</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="$ US" id="collasible-nav-dropdown" className="d-md-block d-none">
								<NavDropdown.Item href="#">RUB</NavDropdown.Item>
								<NavDropdown.Item href="#">UAN</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="ml-5">
							<Nav.Item>
								<Nav.Link className={cx(styles.navIcons, 'd-none d-md-block')} href="#">
									<FontAwesomeIcon icon={faSearch} />
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={cx(styles.navIcons, 'd-none d-md-block')} href="#">
									<RegistrationForm />
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={cx(styles.navIcons, 'd-none d-md-block')} href="#">
									<WishList />
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className={cx(styles.navIcons, 'd-none d-md-block')} href="#">
									<FontAwesomeIcon icon={faShoppingBag} />
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
