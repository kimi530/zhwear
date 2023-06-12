import React , { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Col , Row , Container } from 'react-bootstrap'

import Product from '../../component/product/Product'
import { ProductListAction } from '../../Action/ProductAction'
import Loading from '../../component/Loading/Loading'



const All = () => {
   const dispatch = useDispatch()
   const productList = useSelector((state) => state.productList)

   const { loading , products } = productList

    useEffect(() => {
        dispatch(ProductListAction())
    } , [dispatch])

    return (
        <div>
            <Container>
                {loading ? <Loading /> : 
                 <Row>
                 {products.map((item) => {
                     return (               
                         <Col md={4} xs={6}>
                         <Product  product={item}/>
                         </Col>            
                     )
                 })}
                 </Row>
                 }
           
            </Container>
        </div>
    )
}

export default All
