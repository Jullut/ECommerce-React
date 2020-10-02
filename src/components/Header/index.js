import React from 'react';
import './style.scss';
import logo from './img/logo.png';
import nav from './img/nav_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
	return (
		<header className="header__style">
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand href="#">
						<img src={logo} className="d-inline-block align-top mr-2" alt="OSF logo" />
						<div className="d-inline-block align-middle">
							<span className="header__logo-text d-block mb-2">OSF</span>
							<span className="header__logo-text-sub d-block mt-2">Academy</span>
						</div>
					</Navbar.Brand>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="header__nav ml-auto align-middle" variant="tabs">
							<NavDropdown className="position-static" title="SERVICES" id="collasible-nav-dropdown">
								<div className="header__nav-container w-100">
									<Row>
										<Col>
											<NavDropdown.Header className="header__nav-dropdown-title">
												PRODUCT CATEGORIES
											</NavDropdown.Header>
										</Col>
										<Col>
											<NavDropdown.Header className="header__nav-dropdown-title">
												SALE
											</NavDropdown.Header>
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
										<Col>
											<img src={nav} rounded className="header__nav-img" />
										</Col>
									</Row>
								</div>
							</NavDropdown>
							<Nav.Link className="header__nav-text" href="#">
								COMPANY
							</Nav.Link>
							<Nav.Link className="header__nav-text" href="#">
								LIBRARY
							</Nav.Link>
							<Nav.Link className="header__nav-text" href="#">
								CONTACT US
							</Nav.Link>
							<NavDropdown title="EN" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#">RU</NavDropdown.Item>
								<NavDropdown.Item href="#">UA</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="$ US" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#">RUB</NavDropdown.Item>
								<NavDropdown.Item href="#">UAN</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="ml-5">
							<Nav.Link className="header__nav-icons" href="#">
								<FontAwesomeIcon icon={faSearch} />
							</Nav.Link>
							<Nav.Link className="header__nav-icons" href="#">
								<FontAwesomeIcon icon={faUser} />
							</Nav.Link>
							<Nav.Link className="header__nav-icons" href="#">
								<FontAwesomeIcon icon={faHeart} />
							</Nav.Link>
							<Nav.Link className="header__nav-icons" href="#">
								<FontAwesomeIcon icon={faShoppingBag} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
