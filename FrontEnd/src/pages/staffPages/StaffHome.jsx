import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const StaffHome = () => {
  return (
    <div>
      <Heading heading="Staff Portal" />
      <div className="flex justify-center">
        <Link to="./foods">
          <Button text="Foods" type="default" />
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="./orders">
          <Button text="Orders" type="default" />
        </Link>
      </div>
    </div>
  );
};

export default StaffHome;