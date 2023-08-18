import React from 'react'
import "./Navigation.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({isLogin,setLogin}) => {
  const {inCart} = useSelector((state) => {
    return state
  })

  const navigate = useNavigate()
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">
            <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
            <Link to="/products">
            <Nav.Link href="#action2">Product</Nav.Link>
            </Link>
            <Link to="/about">
            <Nav.Link href="#action2">About</Nav.Link>
            </Link>
            <Link to="/contact">
            <Nav.Link href="#action2">Contact</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
          {isLogin ? <Button onClick={() => {
              setLogin(false)
              navigate("/login")
              localStorage.clear()
            }} variant="outline-success"><i class="fa-solid fa-right-to-bracket"></i> Logout</Button> :<Link to="/login">
            <Button variant="outline-success"><i class="fa-solid fa-right-to-bracket"></i> Login</Button>
            </Link>}
            <Link to="/register">
            <Button variant="outline-success">Register</Button>
            </Link>
            <Link to="cart">
            <Button variant="outline-success"><i class="fa-solid fa-cart-shopping"></i> {inCart.length}</Button>
            </Link>
           
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation