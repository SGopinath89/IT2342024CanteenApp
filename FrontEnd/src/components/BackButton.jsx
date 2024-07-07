import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ to }) => {
  return (
    <Link
      to={to}
      className="bg-yellow-400 py-3 px-5 absolute left-5 top-5 rounded-lg"
    >
      {"Back"}
    </Link>
  );
};

export default BackButton;
