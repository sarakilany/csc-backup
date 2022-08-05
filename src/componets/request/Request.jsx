import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
// import "react-multi-date-picker/styles/colors/green.css";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Request.css";
import "react-datepicker/dist/react-datepicker.css";

const Request = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({ mode: "onBlur" });
  const state = useSelector((state) => state);

  console.log("state", state.has_loged)

  const generateToken = () => {

    let d = new Date().getTime();



    if (window.performance && typeof window.performance.now === "function") {

      d += performance.now();

    }



    let token = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

      let r = (d + Math.random() * 16) % 16 | 0;

      d = Math.floor(d / 16);

      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);

    });

    return token;

  }
  const onSubmit = (data) => {

    console.log("data", data.dateInput.toLocaleDateString('en-GB'));
    const submittedData = {
      "id": generateToken(),
      "user_Id": state.has_loged.id,
      "admin_Id": "2980150400022",
      "req_date": data.dateInput.toLocaleDateString('en-GB'),
      "time_slot": data.time.value,
      "status": "pending",
      "quantity": 0
    }

    let renmeObjectKey = {
      'req_Id': submittedData.id,
      "admin_Id": submittedData.admin_Id,
      "req_date": submittedData.req_date,
      "time_slot": submittedData.time_slot,
      "status": submittedData.status,
      "quantity": 0
    };

    const updatedRequests = state.has_loged.requests;
    updatedRequests.push(renmeObjectKey);
    const submittedFullData = {
      "id": state.has_loged.id,
      "type": state.has_loged.type,
      "name": state.has_loged.name,
      "email": state.has_loged.email,
      "password": state.has_loged.password,
      "city": state.has_loged.city,
      "zone": state.has_loged.zone,
      "address": state.has_loged.address,
      "tel": state.has_loged.tel,
      "landline": state.has_loged.landline,
      "class": state.has_loged.class,
      "badge": state.has_loged.badge,
      "rank": state.has_loged.rank,
      "points": state.has_loged.points,
      "contactPersonalName": state.has_loged.contactPersonalName,
      "addressConfirmImage": state.has_loged.addressConfirmImage,
      "statusVerification": state.has_loged.statusVerification,
      "requests": updatedRequests,

    }
    console.log("subdata", submittedData);

    axios.post(`https://server-csc.herokuapp.com/requests/`, submittedData)
      .then(response => console.log("new", submittedData));
    axios.put(`https://server-csc.herokuapp.com/users/${state.has_loged.id}`, submittedFullData)
      .then(response => console.log("new", submittedData));
    //API request
  };
  watch("dateInput")
  const time = [
    { value: "8 AM to 10 AM", label: "8 AM to 10 AM" },
    { value: "11 AM to 1 PM", label: "11 AM to 1 PM" },
    { value: "2 PM to 4 PM", label: "2 PM to 4 PM" },
    { value: "5 PM to 7 PM", label: "5 PM to 7 PM" },
    { value: "8 PM to 10 PM", label: "8 PM to 10 PM" },
  ];
  const garbageType = [
    { value: "metals", label: "metals" },
    { value: "plastic", label: "plastic" },
    { value: "papers", label: "papers" },
    { value: "organic waste", label: "organic waste" },
  ];

  return (
    <div className="container mx-auto border rounded p-3">
      <h1>Send Request</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="py-3">
        <Form.Group
          as={Col}
          controlId="formGridAvailablePhoneNumber"
          className="pt-3"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="shadow-none"
            type="text"
            placeholder="Enter Available Phone Number"
            {...register("phoneNumber", {
              required: true,
              pattern: /^\+[1-9]{1}[0-9]{3,14}$/,
            })}
          />
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (
            <p className="text-danger">Phone is required</p>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
            <p className="text-danger">
              Make sure your Number is correct. Ex. +1200536248{" "}
            </p>
          )}
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="formGridCollectingTime"
          className="pt-3"
        >
          <Form.Label>Time</Form.Label>
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                placeholder={<div>Choose The Most Suitable Hour</div>}
                {...field}
                options={time}
              />
            )}
          />
          {errors.time && errors.time.type === "required" && (
            <small className="text-danger">choose a suitable time </small>
          )}
        </Form.Group>

        <Form.Label>Date</Form.Label>
        <Controller
          control={control}
          name="dateInput"
          render={({ field }) => (
            <DatePicker

              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}

            />
          )}
        />

        <Form.Group
          as={Col}
          controlId="formGridCollectingType"
          className="pt-3"
        >
          <Form.Label>Garbage Types</Form.Label>
          <Controller
            name="types"
            control={control}
            render={({ field }) => (
              <Select {...field} options={garbageType} isMulti />
            )}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3 d-block mx-auto home-btn shadow-none"
          style={{ backgroundColor: "#628B48", border: "#628B48" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Request;
