import React , { useEffect } from 'react'
import { useParams , Link , useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { Col , Row , Image , Button , Container } from 'react-bootstrap'
import { ProductDetailAction } from '../../Action/ProductAction'
import Loading from '../../component/Loading/Loading'
import './ProductItem.css'

const ProductItem = () => {

  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)

  const { loading , product } = productDetail
  
  useEffect(() => {

    dispatch(ProductDetailAction(params.id))
  } , [dispatch , params.id])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}`)
  }
    return (
        <Container>
         <Link className='back-btn' to="/all">بازگشت به صفحه محصولات</Link>
         { loading ? <Loading /> : (
            <Row> 
            <Col lg={2}></Col>
       
           <Col lg={6}>
           <Image src={product.image} alt={product.name} fluid/>
           </Col>

           <Col lg={4}>
             <Col lg={12} className="my-3 p-3">
             {product.name}
             </Col>
             <Col lg={12} className="my-3 p-3">
             {product.price + ",000تومان"}
             </Col>
             <Col lg={12} className="my-3 p-3">
               <Button className='p-2' onClick={addToCartHandler} variant="warning">افزودن به صفحه خرید</Button>
             </Col>
           </Col>     
         </Row>
         )}
        
        </Container>
    )
}

export default ProductItem
