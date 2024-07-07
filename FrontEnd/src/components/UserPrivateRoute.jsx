import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function UserPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.usertype == "user" ? <Outlet /> : <Navigate to="/" />;
}
