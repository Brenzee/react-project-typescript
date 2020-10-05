import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import ProductList from '../Components/ProductList'

//Data
import { products } from '../products'

const MainScreen = () => {
  return (
    <div>
      <Container>
        <h2 className='my-3'>Welcome to WebShop</h2>
        <Row style={{ width: '75%' }} className='mx-auto'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100 '
                src='https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='iPhone WebShop'
              />
              <Carousel.Caption>
                <h3>iPhone XS</h3>
                <p>Only for $895.95</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                alt='iPhone WebShop'
              />
              <Carousel.Caption>
                <h3>iMac</h3>
                <p>Only for $1295.95</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container style={{ width: '100%' }}>
        <h2 className='my-3'>Latest Products</h2>
        <Row>
          {products.map((product) => (
            <ProductList
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MainScreen
