import React from 'react'
import { Container , Col , Row , InputGroup , Button } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
            <Row>  

                <Col lg={2} >
                  <img src='./logo.png' className="y"/>
                  </Col>

                <Col lg={8}>     
                <InputGroup className="y l justify-content-center">               
                    <input className="mx-1"></input> 
                  <button>subscribe</button>             
                    </InputGroup>     
                  </Col>

                  <Col lg={2}>
                  <Row>
                  <Col lg={12} className='footerlinks'>
                          <ul  className="y">
                              <li>درباره ما</li>
                              <li>تماس با ما</li>
                              <li>فرم استخدام</li>
                          </ul>
                      </Col>
                  </Row>
                  </Col>
             
                  
                
            </Row>
            </Container>
            </div>
    )
}

export default Footer
