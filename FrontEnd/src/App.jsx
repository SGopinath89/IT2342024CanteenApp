import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserHome from "./pages/userPages/UserHome";
import StaffHome from "./pages/staffPages/StaffHome";
import AdminHome from "./pages/adminPages/AdminHome";
import AdminUsers from "./pages/adminPages/user/AdminUsers";
import AdminCanteens from "./pages/adminPages/canteen/AdminCanteens";
import AdminCreateCanteen from "./pages/adminPages/canteen/AdminCreateCanteen";
import AdminUpdateCanteen from "./pages/adminPages/canteen/AdminUpdateCanteen";
import StaffFood from "./pages/staffPages/food/StaffFood";
import StaffOrders from "./pages/staffPages/order/StaffOrders";
import StaffCreateFood from "./pages/staffPages/food/StaffCreateFood";
import StaffUpdateFood from "./pages/staffPages/food/StaffUpdateFood";
import Canteen from "./pages/userPages/Canteen/Canteen";
import Cart from "./pages/userPages/Canteen/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/user/" element={<UserHome />}></Route>
        <Route path="/user/canteen/:name" element={<Canteen />}></Route>
        <Route path="/user/cart" element={<Cart />}></Route>
        <Route path="/staff/" element={<StaffHome />}></Route>
        <Route path="/staff/orders" element={<StaffOrders />}></Route>
        <Route path="/staff/foods" element={<StaffFood />}></Route>
        <Route path="/staff/foods/create" element={<StaffCreateFood />}></Route>
        <Route
          path="/staff/foods/update/:id"
          element={<StaffUpdateFood />}
        ></Route>
        <Route path="/admin/" element={<AdminHome />}></Route>
        <Route path="/admin/users" element={<AdminUsers />}></Route>
        <Route path="/admin/canteens" element={<AdminCanteens />}></Route>
        <Route
          path="/admin/canteens/create"
          element={<AdminCreateCanteen />}
        ></Route>
        <Route
          path="/admin/canteens/update/:id"
          element={<AdminUpdateCanteen />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;