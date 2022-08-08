import React, { useEffect, useState } from "react";
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

function AllRequests() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [req, setRequests] = useState([]);
  const [newReq, setNewReq] = useState({});
  useEffect(() => {
    getRequests();
  }, []);
 

  const getRequests = async () => {
    let { data } = await axios.get("https://server-csc.herokuapp.com/requests");
    console.log(data);
    setRequests(data);
  };
  const updateReq = (myId, newRequest) => {
    axios.put(`https://server-csc.herokuapp.com/requests/${myId}`, newRequest);
  }

  const delReq =(id)=>{
    const myNewReq = req.find((ele,ind)=>{
      return id == ele.req_Id
      }
      )
      console.log("new ele",myNewReq);
      setNewReq({
        "id": myNewReq.id,
        "user_Id": myNewReq.user_Id,
        "admin_Id": myNewReq.admin_Id,
        "req_date": myNewReq.req_date,
        "time_slot": myNewReq.time_slot,
        "status": "completed",
        "quantity": 10
      })
      
    
    setRequests(req.filter((ele,index)=>{
      return id!==ele.req_Id
    }))
    // updateReq(id,newReq)
  }

  return (
    <>
      <Container fluid>
        {(state.has_loged.type == "individual" ||
          state.has_loged.type == "org") && (
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All requests</Card.Title>
                  <p className="card-category">check your requests data</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Admin ID</th>
                        <th className="border-0">Request ID</th>
                        <th className="border-0">Request Date</th>
                        <th className="border-0">Time Slot</th>
                        <th className="border-0">Request Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {state.has_loged.requests.map((req, i) => {
                        return (
                          <>
                            <tr>
                              <td> {req.admin_Id}</td>
                              <td> {req.req_Id}</td>
                              <td> {req.req_date}</td>
                              <td> {req.time_slot}</td>
                              <td> {req.status}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        {state.has_loged.type == "admin" && (
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">All requests</Card.Title>
                  <p className="card-category">check your requests data</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Request ID</th>
                        <th className="border-0">Request Date</th>
                        <th className="border-0">Time Slot</th>
                        <th className="border-0">Request Status</th>
                        <th className="border-0">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {req.map((req, i) => {
                        if(req.status=="pending")
                      {  return (
                          <>
                            <tr>
                              <td> {req.req_Id}</td>
                              <td> {req.req_date}</td>
                              <td> {req.time_slot}</td>
                              <td> {req.status}</td>
                              <td> <Button onClick={()=> delReq(req.req_Id)}>Completed</Button></td>
                              
                            </tr>
                          </>
                        );}
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        {state.has_loged.type=="super" &&
        (<Row className="my-5">
        <Col md="12" style={{backgroundColor:"#fcbf49"}}>
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Pending Requests</Card.Title>
              <p className="card-category">check your requests data</p>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Request ID</th>
                    <th className="border-0">Request Date</th>
                    <th className="border-0">Time Slot</th>
                    <th className="border-0">Request Status</th>
                  </tr>
                </thead>

                <tbody>
                  {req.map((req, i) => {
                    if(req.status =="pending")
                    {return (
                      <>
                        <tr>
                          <td> {req.req_Id}</td>
                          <td> {req.req_date}</td>
                          <td> {req.time_slot}</td>
                          <td> {req.status}</td>
                        </tr>
                      </>
                    );}
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>)}
      {state.has_loged.type=="super" &&
        (<Row>
        <Col md="12" style={{backgroundColor:"#48cae4"}}>
          <Card className="strpied-tabled-with-hover" >
            <Card.Header>
              <Card.Title as="h4">Completed Requests</Card.Title>
              <p className="card-category">check your requests data</p>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Request ID</th>
                    <th className="border-0">Request Date</th>
                    <th className="border-0">Time Slot</th>
                    <th className="border-0">Request Status</th>
                  </tr>
                </thead>

                <tbody>
                  {req.map((req, i) => {
                    if(req.status =="completed")
                    {return (
                      <>
                        <tr>
                          <td> {req.req_Id}</td>
                          <td> {req.req_date}</td>
                          <td> {req.time_slot}</td>
                          <td> {req.status}</td>
                        </tr>
                      </>
                    );}
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>)}
      </Container>
    </>
  );
}

export default AllRequests;
