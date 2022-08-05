import React from "react";
import personal from "../../../assets/images/per.jpg";
import organizational from "../../../assets/images/org.jpg";
import admin from "../../../assets/images/admin&super.jpg";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './section.css'

const Section = () => {
const state = useSelector((state) => state);

  return (

    <div>
    <Row>
        <h1 className="py-5 mb-0 text-uppercase text-center white-bg green-text mt-5">turn your trash into cash</h1>
      </Row>
    {(() => {
      if (state.has_loged ==null ) {
        return  <div className=" mb-2 white-bg">
            <Container>
            <Row className="py-3 py-lg-5 flex-column-reverse flex-lg-row">
   <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
     <h2 className="text-center green-text">
       Save your organization the trouble of wasting time,money and effort

          </h2>
          <Button
            variant="primary"
            className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
            as={Link}
            to='/register'
          >
            Sign Up Now
          </Button>
        </Col>
        <Col className="py-3 py-lg-5">
          <img
            className="d-block w-100 rounded"
            src={organizational}
            alt="organizational"
          />
        </Col>
      </Row>

      <Container className="pt-5">
            <Row className="py-3 py-lg-5">
              <Col className="py-3 py-lg-5">
                <img
                  className="d-block w-100 rounded"
                  src={personal}
                  alt="personal"
                />
              </Col>
              <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
                <h2 className="text-center green-text">
                  Invest with your trash ,make profit and protect the environment{" "}
                </h2>
                <Button
                  variant="primary"
                  className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
                  as={Link}
                  to='/admin/request'
                >
                  Submit Request
                </Button>
              </Col>
            </Row>
            </Container>

    </Container>
      </div>;}
      else if (state.has_loged.type==="org") {
        return <div className=" mb-2 white-bg">
             <Container>
             <Row className="py-3 py-lg-5 flex-column-reverse flex-lg-row">
               <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
                 <h2 className="text-center green-text">
                   Save your organization the trouble of wasting time,money and effort
                 </h2>
                 <Button
                   variant="primary"
                   className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
                   as={Link}
                   to='/request'
                 >
                  Submit Request
                 </Button>
               </Col>
               <Col className="py-3 py-lg-5">
                 <img
                   className="d-block w-100 rounded"
                   src={organizational}
                   alt="organizational"
                 />
               </Col>
             </Row>
           </Container>
             </div>
      }else if (state.has_loged.type==="individual") {
        return <Container className="pt-5">
            <Row className="py-3 py-lg-5">
              <Col className="py-3 py-lg-5">
                <img
                  className="d-block w-100 rounded"
                  src={personal}
                  alt="personal"
                />
              </Col>
              <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
                <h2 className="text-center green-text">
                  Invest with your trash ,make profit and protect the environment{" "}
                </h2>
                <Button
                  variant="primary"
                  className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
                  as={Link}
                  to='/admin/request'
                >
                  Submit Request
                </Button>
              </Col>
            </Row>
            </Container>
      }
      
      else if(state.has_loged.type==="admin"||state.has_loged.type==="super"){
        return <Container className="pt-5">
           <Row className="py-3 py-lg-5">
             <Col className="py-3 py-lg-5">
               <img
                 className="d-block w-100 rounded"
                 src={admin}
                 alt="admin"
               />
             </Col>
             <Col className="col-12 col-lg-6 py-3 py-lg-5 justify-content-center align-items-center flex-column d-flex">
               <h2 className="text-center green-text">
                 Manage your requests and invest in Scrap
               </h2>
               <Button
                 variant="primary"
                 className="home-btn mt-5 px-4 py-3 shadow-none opacity-100"
                 as={Link}
                 to='/admin/allRequests'
               >
                 See All Requests
               </Button>
             </Col>
           </Row>
           </Container>;
      }
    })()}
  </div>
  );
};

export default Section;
