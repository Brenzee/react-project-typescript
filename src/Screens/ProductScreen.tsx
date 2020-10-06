import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { products } from '../products'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../Actions/cartActions'

const ProductScreen: React.FC<RouteComponentProps<RouteParams>> = (
  props
): JSX.Element => {
  const { match, history } = props

  const id: number = Number(match.params.id)
  const dispatch = useDispatch()

  useEffect(() => {
    const data: Product = products.find((x) => x.id === id)!
    setProduct(data)
  })

  const [product, setProduct] = useState<any>()

  const handleAddToCart = () => {
    dispatch(AddToCart(product))
    console.log(product)
    history.push('/cart')
  }

  return (
    <>
      {product === '' ? (
        <Container>
          <h1 className='text-center'>Product has not been found</h1>
        </Container>
      ) : (
        <Container>
          <Link to='/'>
            <Button variant='secondary'>Go Back</Button>
          </Link>
          <Row style={{ width: '100%' }}>
            <Col md={6} className='my-3'>
              <Image src={product?.image} rounded fluid />
            </Col>
            <Col md={6} className='my-3'>
              <h1>{product?.name}</h1>
              <h3>${product?.price}</h3>
              <p>{product?.desc}</p>
              <Button variant='primary' onClick={handleAddToCart}>
                Buy Now
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default ProductScreen
