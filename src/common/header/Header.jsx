import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="green-bg fixed-top">
          <Container>
            <Navbar.Brand className="white-text fw-semibold" as={Link} to="/">
              LOGO
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="white-bg"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="green-bg">
                <Offcanvas.Title
                  className="white-text fw-semibold"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="green-bg">
                <Nav className=" justify-content-md-between align-items-md-center flex-grow-1 ps-md-5">
                  <div className=" d-flex flex-column flex-md-row justify-content-center ps-md-5">
                    <Nav.Link
                      as={Link}
                      className="white-text fw-semibold"
                      to="/"
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      className="white-text fw-semibold"
                      as={Link}
                      to="/about"
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/contactUs"
                      className="white-text fw-semibold"
                    >
                      Contact Us
                    </Nav.Link>
                    <Nav.Link className="white-text fw-semibold">
                      Stats
                    </Nav.Link>
                  </div>
                  <div className=" d-flex flex-column flex-md-row justify-content-center align-items-md-center">
                    <Button
                      variant="primary"
                      className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"
                    >
                      Log In
                    </Button>
                    <Button
                      variant="primary"
                      className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"
                    >
                      Sign Up
                    </Button>
                    <div className="user-border mx-md-1 d-block my-2 my-md-0">
                      <NavDropdown
                        title=""
                        className="user-info "
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item
                          to="/profile"
                          as={Link}
                          className="white-text fw-semibold "
                        >
                          UserName
                          <small className="d-block fw-light">email</small>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          href="#action5"
                          className="white-text fw-semibold "
                        >
                          settings
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          to="/admin"
                          as={Link}
                          className="white-text fw-semibold "
                        >
                          Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          to="/allNews"
                          as={Link}
                          className="white-text fw-semibold "
                        >
                          News
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
