import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const AdminHome = () => {
  return (
    <div>
      <Heading heading="Admin Portal" />
      <div className="flex justify-center">
        <Link to="./canteens">
          <Button text="Canteens" type="default" />
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="./users">
          <Button text="Users" type="default" />
        </Link>
      </div>
    </div>
  );
};
export default AdminHome;