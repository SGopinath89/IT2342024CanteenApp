import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function StaffPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.usertype == "staff" ? <Outlet /> : <Navigate to="/" />;
}
