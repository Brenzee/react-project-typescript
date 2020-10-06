import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <LinkContainer to='/'>
        <Navbar.Brand>WebShop</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/cart'>
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Text>Hello, guest!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
