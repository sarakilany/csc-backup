import React, { useState } from "react";
import "../leaderBoard/LeaderBoard.css";
import axios from "axios";
import { useEffect } from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://server-csc.herokuapp.com/users/").then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="border  mt-5 p-3 py-4 mb-3" md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4" className="text-center">
                  Leader Board
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Rank</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Badge</th>
                      <th className="border-0">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td> {index + 1}</td>
                          <td> {user.id}</td>
                          <td>{user.name}</td>
                          {user.badge ? (
                            <td>{user.badge}</td>
                          ) : (
                            <td>not assigned</td>
                          )}
                          {user.requests ? (
                            <td>
                              {user.requests.reduce((accumulator, object) => {
                                return accumulator + object.quantity;
                              }, 0)}
                            </td>
                          ) : (
                            <td>0</td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
