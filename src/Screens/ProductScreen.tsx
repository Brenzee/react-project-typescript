import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { products } from '../products'

interface ProductScreenProps {
  match: any
}

const ProductScreen: React.FC<ProductScreenProps> = ({ match }) => {
  const id: number = Number(match.params.id)
  console.log(id)

  const product = products.find((x) => x.id === id)
  console.log(product)

  return (
    <>
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
            <Button variant='primary'>Buy Now</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductScreen
