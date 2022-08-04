import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Request from "../componets/request/Request";

function SubmitRequest() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={11} className="mx-auto">
            <Request />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SubmitRequest;
