import React from "react";
import bg from "../assets/images/bg/bg.jpg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="size-36 absolute left-5 top-5">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="text-8xl font-semibold font-mono text-red-800 mb-8">
          VanniEats
        </h1>
        <Link to="/register">
          <Button text="Register" type="default" />
        </Link>
        <Link to="/signin">
          <Button text="SignIn" type="default" />
        </Link>
      </div>
    </div>
  );
};
export default Home;