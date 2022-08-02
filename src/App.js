import React from "react";
import "./App.css";
import Home from "./views/home/Home";
import Privacy from "./views/privacy/Privacy";
import About from "./views/about/About";
import ContactUs from "./views/contactus/ContactUs";
import User from "./views/UserProfile";
import { Routes, Route } from "react-router-dom";
import SingleNews from "./componets/singleNews/SingleNews";
import Admin from "./layouts/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<User />} />
        <Route path="allNews/:title" element={<SingleNews />} />
        <Route path="/admin/*" element={<Admin authed={true} />} />
      </Routes>
    </>
  );
}

export default App;
