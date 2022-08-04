import { useState, useEffect } from "react";
import FormInput from "../FormInputs/formInput";
import Checkbox from "../FormInputs/Checkbox";
import useDropdown from '../FormInputs/useDropdown';
import "./Register.css";
import Header from "../../common/header/Header";
import { Link } from "react-router-dom";

const Register = () => {
  const cities = ['Cairo', 'Alexandria', 'Giza', 'Kafr al-Sheikh'];

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    phone: "",
    landline: "",
    addressConfirmImage: "",
    address: "",
    city: "",
    zone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
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
      name: "phone",
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
<<<<<<< HEAD
||||||| merged common ancestors
      // pattern: "",
    },
    {
        id: 8,
        name: "city",
        type: "select",
        placeholder: "Select your city",
        label: "City",
        required: true, 
    },
    {
      id: 9,
      name: "zone",
      type: "select",
      placeholder: "Select your zone",
      label: "Zone",
      required: true, 
=======
      // pattern: "",
    },
    {
      id: 8,
      name: "city",
      type: "select",
      placeholder: "Select your city",
      label: "City",
      required: true,
    },
    {
      id: 9,
      name: "zone",
      type: "select",
      placeholder: "Select your zone",
      label: "Zone",
      required: true,
>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f
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
  const [city, CityDropdown] = useDropdown("city", "Cairo", cities, onChange);
  const [zone, ZoneDropdown, setZone] = useDropdown("zone", "", zones, onChange);

  useEffect(() => {
    // const cities = ['Cairo', 'Alexandria', 'Giza', 'Kafr al-Sheikh'];
    const ZonesList = [
      ['one', 'dfdfs'],
      ['two', 'érfvr'],
      ['three', 'ththt'],
      ['four', 'thtjhy']
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
    console.log(values);
  };

<<<<<<< HEAD
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Register</h1>
||||||| merged common ancestors
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
=======
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (<>
    <div className="register rounded mx-auto py-md-4 px-md-5 p-2 my-5">
      <form onSubmit={handleSubmit} className="w-100">
        <h2 className=" dark-text mt-0 w-100 text-center">Register</h2>
>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f
        {inputs.map((input) => (
          <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
<<<<<<< HEAD
          onChange={onChange}
          />
||||||| merged common ancestors
          onChange={onChange} />
          :
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
           />
          )
=======
          onChange={onChange} />
          :
          <FormInput 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
           />
          )
>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f
        ))}
<<<<<<< HEAD
        <CityDropdown />
        <ZoneDropdown />
        <Checkbox label="I Agree to the Privacy & Policy" />
        <button type="submit">Submit</button>
||||||| merged common ancestors
        <Checkbox label="I Agree to the Privacy & Policy" />
        <button type="submit">Submit</button>
=======
        <Checkbox label="I Agree to the Privacy & Policy" required/>
        <button className=" home-btn px-4 py-2 my-4 d-block mx-auto" type="submit">Submit</button>
        <p style={{ color: "#818181" }} className="my-2 text-center">
          You have an account? <Link to='/login'>LogIn</Link>
        </p>
>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f
      </form>
    </div>
    </>
  );
};

export default Register;
