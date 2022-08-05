import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import axios from "axios";

// react-bootstrap components
import { Container, Row } from "react-bootstrap";
import { setUseProxies } from "immer";

function Badges() {
  const [badge, setBadge] = useState('');
  const [id, setId] = useState();
  const [user, setUser] = useState();
  const [newUser, setNewUser] = useState();
  console.log("homeu", user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const getUser = async (myId) => {
    let { data } = await axios.get(
      `https://server-csc.herokuapp.com/users/${myId}`
    );
    console.log("here", data)
    setUser(data);
    return data
  }
  const updateBadge = (myId, newUser) => {
    axios.put(`https://server-csc.herokuapp.com/users/${myId}`, newUser)
      .then(response => setUser(newUser));
  }

  const onSubmit = async (data) => {

    setBadge(data.badge);
    const userData = await getUser(data.userid);
    console.log("ser", user);
    const submittedData = {
      "id": data.userid,
      "type": userData.type,
      "name": userData.name,
      "email": userData.email,
      "password": userData.password,
      "city": userData.city,
      "zone": userData.zone,
      "address": userData.address,
      "tel": userData.tel,
      "landline": userData.landline,
      "class": userData.class,
      "badge": data.badge,
      "rank": userData.rank,
      "points": userData.points,
      "contactPersonalName": userData.contactPersonalName,
      "addressConfirmImage": userData.addressConfirmImage,
      "statusVerification": userData.statusVerification,
      "requests": userData.requests,

    }

    setNewUser(submittedData);
    console.log(submittedData);
    console.log(newUser);
    updateBadge(data.userid, submittedData);
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User ID</Form.Label>
              <Form.Control name='userid' type="text" placeholder="Enter User ID that will be assigned badge" {...register("userid")} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Select name='badge' aria-label="Default select example" {...register("badge")}>
              <option>Open this select menu</option>
              <option value="Green Saver">Green Saver</option>
              <option value="Environment Hero">Environment Hero</option>
              <option value="Green Knight">Green Knight</option>
            </Form.Select>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Row>
      </Container>
    </>
  );
}

export default Badges;
