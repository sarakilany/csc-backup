import { useState, useEffect } from "react";
import FormInput from "../FormInputs/formInput";
import Checkbox from "../FormInputs/Checkbox";
import useDropdown from '../FormInputs/useDropdown';
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleHasLoged } from "../../redux/action";
import axios from "axios";


const Register = () => {
  const cities = ['Cairo', 'Alexandria', 'Giza', 'Kafr al-Sheikh'];
  const types = ['individual', 'org'];
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

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
    type: ""
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

  const checkUserData = async () => {
    let { data } = await axios.get("https://server-csc.herokuapp.com/users");
    setUsers(data);
    console.log(data);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [zones, setZones] = useState([]);
  const [type, TypeDropdown] = useDropdown("type", "", types, onChange);
  const [city, CityDropdown] = useDropdown("city", "Cairo", cities, onChange);
  const [zone, ZoneDropdown, setZone] = useDropdown("zone", "", zones, onChange);

  useEffect(() => {
    checkUserData();
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
    console.log(values);
    users.filter((user) => {
      dispatch(handleHasLoged(user));
      navigate("/profile");
    });
  };

  return (<>
    <div className="register mx-auto rounded p-3 my-5">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-3 mb-5">Register</h1>
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
        <Checkbox label="I Agree to the Privacy & Policy" required/>
        <button className=" home-btn px-4 py-2 my-4 d-block mx-auto" type="submit">Submit</button>
        <p style={{ color: "#818181" }} className="my-2 text-center">
          You have an account? <Link to='/login'>LogIn</Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Register;
