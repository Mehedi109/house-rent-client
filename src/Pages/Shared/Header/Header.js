import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Rent House</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {user.email && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user.email ? (
                <Nav.Link as={Link} to="/" onClick={logOut}>
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}
              {user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
