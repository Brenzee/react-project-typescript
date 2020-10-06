import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RemoveFromCart } from '../Actions/cartActions'

const CartScreen: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.system.cart)

  const [cart, setCart] = useState(data)

  useEffect(() => {
    setCart(data)
  }, [data])

  const handleRemoveCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.value)
    dispatch(RemoveFromCart(id))
  }

  return (
    <div>
      <Container>
        {cart.length === 0 ? (
          <Row>
            <Col>
              <h1 className='text-center'>Your cart is empty</h1>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col md={12}>
                <ListGroup>
                  {cart.map(
                    (item: Product, index: number): JSX.Element => (
                      <ListGroup.Item key={index}>
                        <Row className='align-items-center'>
                          <Col md={3} className='text-center'>
                            <Image
                              style={{
                                maxHeight: '80px',
                              }}
                              src={item.image}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={4} className='my-2 h4'>
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </Col>
                          <Col md={3}>
                            <strong className='h4'>${item.price}</strong>
                          </Col>
                          <Col md={2} className='my-2'>
                            <Button
                              type='button'
                              variant='light'
                              value={item.id}
                              onClick={handleRemoveCart}
                            >
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col>
                <h2>
                  Total ({cart.length}):{' '}
                  <strong>
                    $
                    {cart
                      .reduce(
                        (acc: number, item: any) => acc + Number(item.price),
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </h2>
              </Col>
            </Row>
            <Row className='my-0'>
              <Col>
                <Button>Proceed To Checkout</Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  )
}

export default CartScreen
