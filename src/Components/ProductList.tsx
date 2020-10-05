import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ProductListProps {
  name: string
  price: number
  image: string
  id: number
}

const ProductList: React.FC<ProductListProps> = ({
  name,
  price,
  image,
  id,
}) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className='my-2'>
        <Link to={`/product/${id}`}>
          <Card.Img variant='top' src={image} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`/product/${id}`}>{name}</Link>
          </Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant='primary'>Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductList
