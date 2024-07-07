import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserHome from "./pages/userPages/UserHome";
import StaffHome from "./pages/staffPages/StaffHome";
import AdminHome from "./pages/adminPages/AdminHome";
import AdminUsers from "./pages/adminPages/AdminUsers";
import AdminCanteens from "./pages/adminPages/AdminCanteens";
import AdminCreateCanteen from "./pages/adminPages/AdminCreateCanteen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/user-home" element={<UserHome />}></Route>
        <Route path="/staff-home" element={<StaffHome />}></Route>
        <Route path="/admin-home" element={<AdminHome />}></Route>
        <Route path="/admin-users" element={<AdminUsers />}></Route>
        <Route path="/admin-canteens" element={<AdminCanteens />}></Route>
        <Route
          path="/admin-create-canteen"
          element={<AdminCreateCanteen />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;