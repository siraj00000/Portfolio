import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/web&mobileAppdeveloper.png";
import Container from "react-bootstrap/Container";
import "../../App.css";
function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>        
            <Navbar.Brand href="#">
              <Image src={Logo} className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1" className="links">
                  Home
                </Nav.Link>
                <Nav.Link href="#about-me" className="links">
                  About Me
                </Nav.Link>
                <Nav.Link href="#services" className="links">
                  Services
                </Nav.Link>
                <Nav.Link href="#how-work" className="links">
                  How Work
                </Nav.Link>
                <Nav.Link href="#action2" className="links">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#action2" className="links">
                  Contacts
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>         
      </Container>
    </Navbar>
  );
}

export default Navigation;
