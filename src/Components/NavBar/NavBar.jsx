import React from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="pagetitle" to="/">MyApp</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinkcontainer">
            <Link className="navlink" to="/catalog">Catalog</Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categories/Human">Human</NavDropdown.Item>
              <NavDropdown.Item href="/categories/Alien">
                Alien
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar