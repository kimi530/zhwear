import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import All from './Pages/All/All'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

import { Container } from 'react-bootstrap'
import ProductItem from './Pages/ProductItem/ProductItem'

const App = () => {

  return (  
      <Router>  
      <Header />
       <Container fluid>     
       <main className="py-3">
       
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/blanks" element={<All />} />
        <Route path="/zhwear" element={<All />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/cart/:id?" element={<Cart />} />
        </Routes>
       
      </main>
      <Footer />
      </Container>
      </Router>
  )
}

export default App