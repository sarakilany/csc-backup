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
import Admin from "./layouts/Admin";
import TableDetails from "./views/TableDetails/TableDetails";
import IndividualDetails from './views/individualDetails/IndividualDetails';
import OrgDetails from './views/orgDetails/OrgDetails'

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
        <Route path="tableDetails" element={<TableDetails />} />
        <Route path="allNews/:title" element={<SingleNews />} />
        <Route path="individualDetails" element={< IndividualDetails/>} />
        <Route path="orgDetails" element={< OrgDetails/>} />
        
        <Route path="/admin/*" element={<Admin authed={true} />} />

        
        
        {/* <Navigate from="/" to="/admin" /> */}
      </Routes>
    </>
  );
}

export default App;
