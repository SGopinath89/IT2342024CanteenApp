import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      AdminHome
      <Link to="/admin-canteens">Canteen</Link>
      <Link to="/admin-users">Users</Link>
    </div>
  );
};

export default AdminHome;