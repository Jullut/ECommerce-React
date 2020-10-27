import React, { useState, useEffect } from 'react';
import styles from './Cookie.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

const Cookie = () => {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function handleClick() {
		handleClose();
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			handleShow();
		}, 10000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<Container>
				<Modal
					show={show}
					onHide={handleClose}
					centered
					backdrop="static"
					keyboard={false}
					className={styles.modal}
					size="xl"
				>
					<Modal.Header closeButton className={styles.modalHeader}>
						<Modal.Title className={styles.modalTitle}>This website uses cookies</Modal.Title>
					</Modal.Header>
					<Modal.Body className={styles.modalBody}>
						<div>
							OSF uses its own and third-party cookies for statistical purposes, to know your preferences,
							for website performance and interaction with social media offering publicity tailored to
							your interests. If you continue browsing, we consider that you accept its use. You can
							expand this information consulting our Cookies Policy Page.
						</div>
						<Button onClick={handleClick} className={styles.btn}>
							Accept
						</Button>
					</Modal.Body>
				</Modal>
			</Container>
		</div>
	);
};

export default Cookie;
