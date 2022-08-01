import React from "react";
import "./App.css";
import Home from "./views/home/Home";
import Privacy from "./views/privacy/Privacy";
import About from "./views/about/About";
import ContactUs from "./views/contactus/ContactUs";
import User from "./views/UserProfile";
import Dashboard from "./views/Dashboard";
import Icons from "./views/Icons";
import Notifications from "./views/Notifications";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AllNews from "./componets/allNews/AllNews";
import SingleNews from "./componets/singleNews/SingleNews";
import dashboardRoutes from "./routes";
import AdminLayout from "./layouts/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<User />} />
        <Route path="allNews" element={<AllNews />} />
        <Route path="allNews/:title" element={<SingleNews />} />
        <Route path="/admin" element={<AdminLayout authed={true} />} />
        {/* <Navigate from="/" to="/admin" /> */}
      </Routes>
    </>
  );
}

export default App;
