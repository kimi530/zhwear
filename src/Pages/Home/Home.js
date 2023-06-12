import React from 'react' 
import { Col , Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Row className="home-images">
                <Col md={12} xs={12}>
                <img src="/Home/C1.jpg"/>
                </Col>
                <Col md={4} xs={6}>
                <img src="/Home/C32.jpg"/>
                </Col>
                <Col md={4} xs={6}>
                <img src="/Home/untitled-1.psasasd2.jpg"/>
                </Col>
                <Col md={4} xs={12}>
                <img src="/Home/C2.jpg"/>
                </Col>
                <Col md={12} xs={12}>
                <img src="/Home/photo144143775877557655.jpg"/>
                </Col>
                <Col md={4} xs={12}>
                <img src="/Home/4_5886418842862751147.jpg"/>
                </Col>
                <Col md={4} xs={12}>
                <img src="/Home/photo144143775877557620.jpg"/>
                </Col>
                <Col md={4} xs={12}>
                <img src="/Home/4_5886418842862751146.jpg"/>
                </Col>
            </Row>
        </div>
    )
}

export default Home
