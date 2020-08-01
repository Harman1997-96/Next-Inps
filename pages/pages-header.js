import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Logo } from "./header-style";

// import { Container } from './styles';

function pages() {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Logo src="logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <h3 className="page-logo">INPS</h3>
          </Navbar.Brand>
          <br />
          <p className="page-logo-paragraph">MCA Enterance Coaching</p>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/online-classes">NIMCET Online Classes</Nav.Link>
              <Nav.Link href="/test-series">Test Series</Nav.Link>
              <Nav.Link href="/last-year-papers">Last Year Papers</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Signup</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default pages;