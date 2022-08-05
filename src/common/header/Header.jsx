import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { handleHasLoged } from "../../redux/action";
import userPhoto from '../../assets/images/profile/user-white.png';
import orgPhoto from '../../assets/images/profile/company-white.png';
import indvPhoto from '../../assets/images/profile/house-white.png';
import logo from '../../assets/images/logo.png'

export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const OnLogOut =()=>{
    dispatch(handleHasLoged(null));
    navigate("/")
    window.scrollTo(0, 0);
}

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="green-bg sticky-top py-0">
          <Container>
            <Navbar.Brand className="white-text fw-semibold my-0" as={Link} to="/">
              <img src={logo} alt="logo" className="logo-pic"/>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="white-bg mx-3"
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
                    <Nav.Link
                      as={Link}
                      to="/allNews"
                      className="white-text fw-semibold"
                    >
                      News
                    </Nav.Link>
                  </div>
                  <div className=" d-flex flex-column flex-md-row justify-content-center align-items-md-center">
                    {state.has_loged === null ? (
                      <div className="d-flex">
                        <Button
                          as={Link}
                          to="/login"
                          variant="primary"
                          className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"
                        >
                          Log In
                        </Button>
                        <Button
                          as={Link}
                          to="/register"
                          variant="primary"
                          className="nav-btn mx-md-1 d-block my-2 my-md-0 white-bg green-text fw-semibold border-0 shadow-none"
                        >
                          Sign Up
                        </Button>
                      </div>
                    ) : (
                      <div className="user-border mx-md-1 d-block my-2 my-md-0">
                        {
                        state.has_loged.type === "individual"
                          ?(
                            <NavDropdown
                            title=""
                            className="user-info position-relative "
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            style={{
                              backgroundImage:
                                `url(${indvPhoto})`,
                            }}
                          >
                            <NavDropdown.Item
                              to="/admin/user"
                              as={Link}
                              className="white-text fw-semibold text-capitalize "
                            >
                              {state.has_loged.name}
                              <small className="d-block fw-light">
                                {state.has_loged.email}
                              </small>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              to="/admin/editProfile"
                              as={Link}                             
                              className="white-text fw-semibold "
                            >
                               Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              to="/admin/request"
                              as={Link}
                              className="white-text fw-semibold "
                            >
                              Make a Request
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              className="white-text fw-semibold "
                              onClick={() => OnLogOut()}
                            >
                              LogOut
                            </NavDropdown.Item>
                          </NavDropdown>
                           ):(
                            
                              state.has_loged.type === "org"?
                              (
                                <NavDropdown
                            title=""
                            className="user-info position-relative "
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            style={{
                              backgroundImage:
                              `url(${orgPhoto})`,
                            }}
                          >
                            <NavDropdown.Item
                              to="/admin/user"
                              as={Link}
                              className="white-text fw-semibold text-capitalize "
                            >
                              {state.has_loged.name}
                              <small className="d-block fw-light">
                                {state.has_loged.email}
                              </small>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                               to="/admin/editProfile"
                               as={Link}
                              className="white-text fw-semibold "
                            >
                              Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              to="/admin/request"
                              as={Link}
                              className="white-text fw-semibold "
                            >
                              Submit Request
                            </NavDropdown.Item>
                            <NavDropdown.Item                              
                              className="white-text fw-semibold "
                              onClick={() => OnLogOut()}
                            >
                              LogOut
                            </NavDropdown.Item>
                          </NavDropdown>
                              ):(
                                <NavDropdown
                            title=""
                            className="user-info position-relative "
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            style={{
                              backgroundImage:
                              `url(${userPhoto})`,
                            }}
                          >
                            <NavDropdown.Item
                              to="/admin/user"
                              as={Link}
                              className="white-text fw-semibold text-capitalize "
                            >
                              {state.has_loged.name}
                              <small className="d-block fw-light">
                                {state.has_loged.email}
                              </small>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                               to="/admin/editProfile"
                               as={Link}
                              className="white-text fw-semibold "
                            >
                              Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              to="/admin/allRequests"
                              as={Link}
                              className="white-text fw-semibold "
                            >
                              All Requests
                            </NavDropdown.Item>
                            <NavDropdown.Item                      
                              className="white-text fw-semibold "
                              onClick={() => OnLogOut()}
                            >
                              LogOut
                            </NavDropdown.Item>
                          </NavDropdown>
                              )
                            
                            
                            )
                        } 
                        
                      </div>
                    )}
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
