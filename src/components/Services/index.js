import React from 'react';
import styles from './Services.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Services = () => {
    return ( <div>

<Container className={styles.bg}>

<Row>
    <Col>
    <img src='/img/services/focus.png' className={styles.img} />
    <h1 className={styles.mainText}>Focus</h1>
    <p className={styles.subText}>Our unwavering focus on superior service delivery and building next generation competencies</p>
    </Col>

    <Col>
    <img src='/img/services/method.png' className={styles.img} />
    <h1 className={styles.mainText}>Method</h1>
    <p className={styles.subText}>A standardized methodology designed to deliver measurable business results and predictable costs</p>
    </Col>

    <Col>
    <img src='/img/services/knowledge.png' className={styles.img} />
    <h1 className={styles.mainText}>Knowledge</h1>
    <p className={styles.subText}>A highly skilled, proactive workforce that reliably improves each client’s ROI while mitigating their business risk</p>
    </Col>
</Row>

</Container>

    </div> );
}
 
export default Services;