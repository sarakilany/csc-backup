import React from "react";
import "./App.css";
import Home from "./views/home/Home";
import Privacy from "./views/privacy/Privacy";
import About from "./views/about/About";
import ContactUs from "./views/contactus/ContactUs";
import User from "./views/UserProfile";
<<<<<<< HEAD
import UserInfo from "./componets/profile/userInfo/UserInfo.jsx";
import Dashboard from "./views/Dashboard";
import Icons from "./views/Icons";
import Notifications from "./views/Notifications";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AllNews from "./componets/allNews/AllNews";
||||||| merged common ancestors
import Dashboard from "./views/Dashboard";
import Icons from "./views/Icons";
import Notifications from "./views/Notifications";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AllNews from "./componets/allNews/AllNews";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f
import SingleNews from "./componets/singleNews/SingleNews";
import Admin from "./layouts/Admin";
import AllNews from "./componets/allNews/AllNews";
import Login from "./componets/login/Login";
import Register from "./componets/Register/Register";
import TableDetails from "./views/TableDetails/TableDetails";
import LeaderBoard from "./componets/leaderBoard/LeaderBoard";
import IndividualDetails from './views/individualDetails/IndividualDetails';
import OrgDetails from './views/orgDetails/OrgDetails'
import Header from "./common/header/Header";
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<User />} />
        <Route path="allNews" element={<AllNews />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="tableDetails" element={<TableDetails />} />
        <Route path="allNews/:title" element={<SingleNews />} />
<<<<<<< HEAD
        <Route path="profile/:id" element={<UserInfo />} />
||||||| merged common ancestors

=======
        <Route path="individualDetails" element={<IndividualDetails />} />
        <Route path="orgDetails" element={<OrgDetails />} />
        <Route path="leaderBoard" element={<LeaderBoard />} />

>>>>>>> ed27739dedf0809f9697035cd0fbfbeaf7f61d1f

        <Route path="/admin/*" element={<Admin authed={true} />} />
      </Routes>
    </>
  );
}

export default App;
