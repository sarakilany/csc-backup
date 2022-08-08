

import React, { useState, useEffect } from "react";
import FormInput from "../componets/FormInputs/formInput";
import useDropdown from '../componets/FormInputs/useDropdown';
import "../componets/Register/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleHasLoged } from "../redux/action";
import axios from "axios";

const EditProfile = () => {
  const cities = ['Cairo', 'Alexandria', 'Giza', 'Kafr al-Sheikh'];
  const types = ['individual', 'org'];
  const [users, setUsers] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [values, setValues] = useState({
    id: state.has_loged.id,
    name: state.has_loged.name,
    email: state.has_loged.email,
    birthday: state.has_loged.birthday,
    password: state.has_loged.password,
    confirmPassword: "",
    tel: state.has_loged.tel,
    landline: state.has_loged.landline,
    addressConfirmImage: state.has_loged.addressConfirmImage,
    address: state.has_loged.address,
    city: state.has_loged.city,
    zone: state.has_loged.zone,
    type: state.has_loged.type,
    class: state.has_loged.class,
    badge: state.has_loged.badge,
    rank: state.has_loged.rank,
    points: state.has_loged.points,
    contactPersonalName: state.has_loged.contactPersonalName,
    statusVerification: state.has_loged.statusVerification,
    requests: state.has_loged.requests,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: `^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$`,
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "Your age must be above 16 years",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 6,
      name: "tel",
      type: "tel",
      placeholder: "Phone",
      errorMessage: "phone number should be 11 number",
      label: "Phone",
      required: true,
    },
    {
      id: 7,
      name: "landline",
      type: "tel",
      placeholder: "Landline",
      errorMessage: "",
      label: "Landline",
    },
    {
      id: 8,
      name: "address",
      type: "text",
      placeholder: "Address",
      errorMessage: "You should enter your current address!",
      label: "Address",
      required: true,
    },
    {
      id: 9,
      name: "addressConfirmImage",
      type: "file",
      placeholder: "",
      label: "Upload electric connected or tax record",
      required: true, 
    }
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [zones, setZones] = useState([]);
  const [type, TypeDropdown] = useDropdown("type", "", types, onChange);
  const [city, CityDropdown] = useDropdown("city", "Cairo", cities, onChange);
  const [zone, ZoneDropdown, setZone] = useDropdown("zone", "", zones, onChange);

  useEffect(() => {
    const ZonesList = [
      ['Old Cairo', 'El Matareya', 'Garden City', 'Heliopolis', 'Maadi', 'Zamalek'],
      ['Al-Montazah', 'Al-Gomrok', 'El-Dekhila', 'Agam', 'borg El-Arab'],
      ['Dokki', 'Agouza', 'Haram', 'Omrania', 'Monib'],
      ['Desouk', 'Al‑Burulus', 'Biyala', 'Qallin', 'Al-Burulus']
    ];
    setZones([]);
    setZone("");

    let id = cities.indexOf(city);

    const selectZone = (id => {
      const zoneString = ZonesList.filter((zone,i) => i === id );
      setZones(...zoneString);
    })

    selectZone(id);    
  }, [city, setZone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      "id": state.has_loged.id,
      "type": values.type,
      "name": values.name,
      "email": values.email,
      "password": values.password,
      "city": values.city,
      "zone": values.zone,
      "address": values.address,
      "tel": values.tel,
      "landline": values.landline,
      "class": state.has_loged.class,
      "badge": state.has_loged.badge,
      "rank": state.has_loged.rank,
      "points": state.has_loged.points,
      "contactPersonalName": state.has_loged.contactPersonalName,
      "addressConfirmImage": values.addressConfirmImage,
      "statusVerification": state.has_loged.statusVerification,
      "requests": state.has_loged.requests,
    }
    console.log(values);
    dispatch(handleHasLoged(submittedData));
    axios.put(`https://server-csc.herokuapp.com/users/${submittedData.id}`, submittedData).then(
      response => console.log(submittedData)
    );
    navigate("/admin/user");
  };

  return (<>
    <div className="register mx-auto rounded p-3 my-5">
      <form onSubmit={handleSubmit}>
        {state.has_loged !== null ? (
          <>
        <h1 className="text-center mt-3 mb-5">EDIT PROFILE</h1>
        <TypeDropdown />
        {inputs.map((input) => (
          <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          />
        ))}
          <CityDropdown />
          <ZoneDropdown />         
          <label className="flex-row-reverse justify-content-end"><div>I Agree to the <Link to="/privacy">Privacy & Policy</Link></div><input className="checkbox-input" type="checkbox" required/></label>
          <button className=" home-btn px-4 py-2 my-4 d-block mx-auto" type="submit">Submit</button>
        </>
        ):
          <h2 className="text-center">You are not loged in!!</h2>
        }
      </form>
    </div>
    </>
  );
};

export default EditProfile;