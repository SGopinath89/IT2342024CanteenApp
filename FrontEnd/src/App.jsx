import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserHome from "./pages/userPages/UserHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/user-home" element={<UserHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
