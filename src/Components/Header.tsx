import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand>WebShop</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>Home</Nav.Link>
          <NavDropdown id='basic-nav-dropdown' title='Products'>
            <NavDropdown.Item>Phones</NavDropdown.Item>
            <NavDropdown.Item>Computers</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Headphones</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Text>Hello, guest!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
