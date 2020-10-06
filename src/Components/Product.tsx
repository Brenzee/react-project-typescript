import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AddToCart } from '../Actions/cartActions'
import { products } from '../products'

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
  const dispatch = useDispatch()
  const handleAddToCartHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = Number(e.currentTarget.value)
    const product = products.find((x) => x.id === itemId)!
    dispatch(AddToCart(product))
    alert(`${product.name} has been added to the cart!`)
  }

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className='my-2' style={{ borderRadius: '10px' }}>
        <Link to={`/product/${id}`}>
          <Card.Img
            variant='top'
            src={image}
            style={{
              height: '200px',
              objectFit: 'cover',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`/product/${id}`} className='h3'>
              {name}
            </Link>
          </Card.Title>
          <Card.Text>
            <strong className='h4'>${price}</strong>
          </Card.Text>
          <Button variant='primary' value={id} onClick={handleAddToCartHome}>
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductList
