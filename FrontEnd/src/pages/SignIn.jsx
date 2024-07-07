import React, { useState } from "react";
import bg from "../assets/images/bg/bg1.jpg";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import Button from "../components/Button";
const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setFormData((curData) => {
      return {
        ...curData,
        [e.target.id]: e.target.value,
      };
    });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert("Login Succcess");
        dispatch(signInSuccess(data));

        if (data.usertype == "user") navigate("/user");
        if (data.usertype == "staff") navigate("/staff");
        if (data.usertype == "admin") navigate("/admin");
      }
    } catch (error) {
      console.log("error is " + error);
      alert("Login failed");
    }
  };
  return (
    <div
      className=" min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="size-36 absolute left-5 top-5">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="absolute left-1/4 top-1/3 flex flex-col items-center w-2/5 max-w-[30vw] p-5">
        <h2 className="text-3xl mb-6">SignIn Here..</h2>
        <form onSubmit={(e) => onSubmitForm(e)} className="w-full text-lg">
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="registrationnumber">
              Registration No
            </label>
            <input
              className="w-52 outline-none border-none rounded-md px-3 py-1"
              type="text"
              id="registrationnumber"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="password">
              Password
            </label>
            <input
              className="w-52 outline-none border-none rounded-md px-3 py-1"
              type="password"
              id="password"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <Button text="SignIn" type="default" />
        </form>
        <Link to="/register" className="text-blue-900">
          Don't have an account? Let's Register
        </Link>
      </div>
    </div>
  );
};
export default SignIn;