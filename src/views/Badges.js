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
    setUser(data);
  }
  const updateBadge = (myId, newUser) => {
    axios.put(`https://server-csc.herokuapp.com/users/${myId}`, newUser)
      .then(response => setUser(newUser));
  }

  const onSubmit = async (data) => {

    setBadge(data.badge);
    await getUser(data.userid);
    console.log(user);
    setNewUser({
      "id": data.userid,
      "email": user.email,
      "password": user.password,
      "city": user.city,
      "zone": user.zone,
      "address": user.address,
      "tel": user.tel,
      "landline": user.landline,
      "class": user.class,
      "badge": data.badge,
      "rank": user.rank,
      "points": user.points,
      "contactPersonalName": user.contactPersonalName,
      "addressConfirmImage": user.addressConfirmImage,
      "statusVerification": user.statusVerification,
      "requests": user.requests,
    })
    console.log(newUser);
    updateBadge(data.userid, newUser);
  }




  // users.filter((user) => {
  //   if (data.email === user.email && data.password === user.password) {
  //     dispatch(handleHasLoged(user.role));
  //     navigate("/admin/*");
  //   } else {
  //     setFailedlogIn(true);
  //     reset(user.data);
  //   }
  // });
  //};
  // let user = axios.get('https://server-csc.herokuapp.com/users/96051').then(r => r.data)
  // axios.put('https://server-csc.herokuapp.com/users/96051', {
  //   "id": 96051,
  //   "type": 'org',
  //   "name": 'Recyle co',
  //   "email": "recycle@yahoo.com",
  //   "password": "kjerR#$ad@",
  //   "city": 'cairo',
  //   "zone": 'Nasr City',
  //   "address": "Apt 3, Buliding No 6, wafeek.St, nasr city, cairo",
  //   "tel": "01014037844",
  //   "landline": null,
  //   "class": 'C',
  //   "badge": "green saver",
  //   "rank": '150',
  //   "points": '90',
  //   "contactPersonalName": "saad",
  //   "addressConfirmImage": null,
  //   "statusVerification": "verfied",
  //   "requests": [
  //     {
  //       "admin_Id": "2980150400040",
  //       "req_Id": 0,
  //       "req_date": "26/07/2022",
  //       "time_slot": "02:00AM - 03:00AM",
  //       "status": "pending",
  //       "quantity": 9.5
  //     },
  //     {
  //       "admin_Id": "2980150400040",
  //       "req_Id": 1,
  //       "req_date": "24/06/2022",
  //       "time_slot": "06:00PM - 09:00PM",
  //       "status": "completed",
  //       "quantity": 12
  //     }
  //   ],
  // });
  // axios.put('https://server-csc.herokuapp.com/users/' + id, {
  //   "id": id,
  //   "type": user.type,
  //   "name": user.name,
  //   "email": user.email,
  //   "password": user.password,
  //   "city": user.city,
  //   "zone": user.zone,
  //   "address": user.address,
  //   "tel": user.tel,
  //   "landline": user.langline,
  //   "class": user.class,
  //   "badge": badge,
  //   "rank": user.rank,
  //   "points": user.points,
  //   "contactPersonalName": user.contactPersonalName,
  //   "addressConfirmImage": user.addressConfirmImage,
  //   "statusVerification": user.statusVerification,
  //   "requests": user.requests,
  // });

  return (
    <>
      <Container fluid>
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User ID</Form.Label>
              <Form.Control name='userid' type="number" placeholder="Enter User ID that will be assigned badge" {...register("userid")} />
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
