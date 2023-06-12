import React,{ useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart , removeFromCart } from '../../Action/cartAction'
import { Row , Col , ListGroup , Image , Button , Card, Container } from 'react-bootstrap'
import './Cart.css'

const Cart = () => {

    const params = useParams()

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

     const { cartItems } = cart

    useEffect(() => {
        if (params.id) {
            dispatch(addToCart(params.id))
        }
    } , [dispatch , params.id])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
             <Container> 
          <Row>
              <Col lg={10}>
                  {cartItems.length === 0 ? (
                      <p className='empty-cart'>سبد خرید خالی است.</p>
                  ) : (
                      <ListGroup variant="flush">
                          {cartItems.map((item) => (
                              <ListGroup.Item>
                                  <Row>
                                      <Col xs={2}>
                                      <Image src={item.image} alt={item.name} fluid rounded />
                                      </Col>

                                      <Col xs={3}>
                                          {item.name}
                                      </Col>

                                      <Col xs={2}>
                                          {item.price}
                                      </Col>

                                      <Col xs={2}>
                                          <Button
                                          onClick={() => removeFromCartHandler(item.product)}
                                          type="button"
                                          variant="light"
                                          >
                                              <i className="fa fa-trash"></i>
                                          </Button>
                                      </Col>
                                  </Row>
                              </ListGroup.Item>
                          ))}
                      </ListGroup>
                  )}
              </Col>
              <Col lg={2}>
                  <Card>
                      <ListGroup variant="flush">
                          <ListGroup.Item>
                            مجموع : {cartItems.reduce((acc , item ) => acc + item.price , 0)}
                          </ListGroup.Item>
                      </ListGroup>
                  </Card>
              </Col>
          </Row>
          </Container>
        </div>
    )
}

export default Cart
