import React from 'react'
import { Nav , Row , Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <header>                 
           <Row>
               <Col lg={4}>
               <Nav>
                   <LinkContainer  to="/shop">
                   <Nav.Link className='navlinks'>Shop</Nav.Link>
                   </LinkContainer>

                   <LinkContainer  to="/brand">
                   <Nav.Link className='navlinks'>Brand</Nav.Link>  
                   </LinkContainer>

                   <LinkContainer  to="/media">
                   <Nav.Link className='navlinks'>Media</Nav.Link>
                   </LinkContainer>
               </Nav>
               </Col>

               <Col lg={4}>
               <Nav className="justify-content-center brand">
                   <LinkContainer  to="/">
                   <Nav.Link className='navlinks navbrand'>ZHWEAR</Nav.Link>
                   </LinkContainer>
               </Nav>
               </Col>

               <Col lg={4}>
               <Nav className="justify-content-end">
               <LinkContainer  to="/login">
                   <Nav.Link className='navlinks'>ورود/ثبت نام</Nav.Link>
                   </LinkContainer>

                   <LinkContainer to="/cart">
                   <Nav.Link className='navlinks'>سبد خرید</Nav.Link>
                   </LinkContainer>
                   
               </Nav>
               </Col>
            
               <Col lg={12}>
               <div className="header-bg"></div>
               </Col>
                          
               <Col lg={12}>
               <Nav className="justify-content-center main-links">
                  <LinkContainer to="/blanks"><Nav.Link className='navlinks mainlinks'>BLANKS</Nav.Link></LinkContainer> 
                  <LinkContainer to="/zhwear"><Nav.Link className='navlinks mainlinks'>ZHWEAR</Nav.Link></LinkContainer> 
                  <LinkContainer to="/accessories"><Nav.Link className='navlinks mainlinks'>ACCESSORIE</Nav.Link></LinkContainer> 
                  <LinkContainer to="/new"><Nav.Link className='navlinks mainlinks'>NEW</Nav.Link></LinkContainer> 
                  <LinkContainer to="/all"><Nav.Link className='navlinks mainlinks'>ALL</Nav.Link></LinkContainer> 
                  <LinkContainer to="/outlet"><Nav.Link className='navlinks mainlinks'>OUTLET</Nav.Link></LinkContainer> 

               </Nav>
               </Col>
                       
               <Col lg={12}>
               <hr  className="hr"/>
               </Col>
               </Row>                
               </header>
    )
}

export default Header
