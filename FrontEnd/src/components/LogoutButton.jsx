import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/userSlice";
import { destroyCart } from "../redux/user/cartSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(destroyCart());

    navigate("/signin");
  };

  return (
    <button
      onClick={onLogout}
      className="p-3 absolute top-5 px-5 right-5 bg-red-500 rounded-lg"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
