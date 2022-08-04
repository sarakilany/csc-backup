import React from "react";
import { useSelector } from "react-redux";

// react-bootstrap components
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function UserProfile() {
  const state =useSelector((state)=>state);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="userheader"
                  src={require("../assets/images/environment-banner.jpg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" className="text-decoration-none" onClick={(e) => e.preventDefault()}>
                    { (state.has_loged.type === "super" || state.has_loged.type === "admin" )&&
                      <img
                        alt="user pic"
                        className="avatar border-gray"
                        src={require("../assets/images/profile/user-black.png")}
                        style={{backgroundColor:'#F3F9E3'}}
                      ></img>
                      }{
                      state.has_loged.type === "individual" &&
                      <img
                        alt="user pic"
                        className="avatar border-gray"
                        src={require("../assets/images/profile/house-black.png")}
                        style={{backgroundColor:'#F3F9E3'}}
                      ></img>
                    }{
                      state.has_loged.type === "org" &&
                      <img
                        alt="user pic"
                        className="avatar border-gray"
                        src={require("../assets/images/profile/company-black.png")}
                        style={{backgroundColor:'#F3F9E3'}}
                      ></img>
                    }
                    <h3 className="title my-1 text-uppercase dark-text">{state.has_loged.name}</h3>
                    {
                      state.has_loged.badge &&
                    <small className="white-text green-bg p-1 rounded-4 mb-3 d-inline-block">{state.has_loged.badge}</small>
                    }
                  </a>
                </div>
                  <p className=" description green-text mt-4 text-center mb-1">
                  {state.has_loged.address}
                  </p>
                <p className="description text-center">
                  <a className="text-decoration-none" href={`mailto: ${state.has_loged.email}`} rel="noreferrer" target="_blank">{state.has_loged.email}</a>{` || `}
                  <a className="text-decoration-none" href={`tel: ${state.has_loged.tel}`} rel="noreferrer" target="_blank">{state.has_loged.tel}</a>
                  {state.has_loged.landline && <>{` || `}<a className="text-decoration-none" href={`tel: ${state.has_loged.landline}`} rel="noreferrer" target="_blank">{state.has_loged.landline}</a> </>}
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
