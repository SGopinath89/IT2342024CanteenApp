import React, { useState } from "react";
import bg from "../assets/images/bg/bg1.jpg";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
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
      const res = await fetch("/api1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert(data.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log("error is " + error);
      alert("Registration failed");
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
      <div className="absolute left-1/4 top-1/3 flex flex-col items-center  w-2/5 max-w-[30vw] p-5">
        <h2 className="text-3xl mb-6">Register Here..</h2>
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
            <label className="inline-block" htmlFor="username">
              Username
            </label>
            <input
              className="w-52 outline-none border-none rounded-md px-3 py-1"
              type="text"
              id="username"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="password">
              Password
            </label>
            <input
              className="w-52 outline-none border-none rounded-md px-3 py-1"
              type="text"
              id="password"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="telephone">
              Phone No
            </label>
            <input
              className="w-52 outline-none border-none rounded-md px-3 py-1"
              type="text"
              id="telephone"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <Button text="Regsiter" type="default" />
        </form>
        <Link to="/signin" className="text-blue-900">
          Already have an account? Let's SignIn
        </Link>
      </div>
    </div>
  );
};
export default Register;