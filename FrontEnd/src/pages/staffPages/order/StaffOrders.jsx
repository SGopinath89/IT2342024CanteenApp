import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";
import LogoutButton from "../../../components/LogoutButton";

const StaffOrders = () => {
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({});

  const columns = ["Order ID", "Buyer ID", "Item", "Quantity"];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getCanteenId = async () => {
      try {
        const res = await fetch(`/api1/canteen/staff/${_id}`);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setFormData((curData) => {
            return {
              ...curData,
              Canteenid: data[0]._id,
            };
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCanteenId();
  }, [_id]);

  const fetchOrders = async () => {
    if (formData.Canteenid) {
      console.log(formData);
      try {
        const res = await fetch("/api1/orders/view", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          const data = await res.json();
          "Order ID", "Item", "Quantity";
          const orders = [];
          data.forEach((order) => {
            order.foods.forEach((food) => {
              orders.push({
                "Order ID": order._id,
                "Buyer ID": order.buyer,
                Item: food.foodname,
                Quantity: food.count,
              });
            });
          });

          setRows(orders);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [formData]);

  return (
    <div className="min-h-screen">
      <BackButton to="./../" />
      <LogoutButton />
      <Heading heading="Arrived Orders" />
      <div className="flex justify-center">
        <div className="w-full min-h-96 border border-yellow-600 rounded-lg">
          <div className="w-full p-4 border border-zinc-200 rounded-md h-[65vh] ">
            <div className="flex justify-around mb-4">
              {columns.map((column, ind) => (
                <div
                  className="flex-1 shrink-0 text-start font-bold text-2xl"
                  key={ind}
                >
                  {column}
                </div>
              ))}
            </div>
            <div>
              {rows.map((row, ind) => {
                return (
                  <div
                    key={ind}
                    className="flex justify-around items-center my-2"
                  >
                    {Object.entries(row)
                      .filter((entry) => entry[0] !== "id")
                      .map((entry, key) => {
                        return (
                          <div
                            className="flex-1 shrink-0 flex justify-start overflow-hidden"
                            key={key}
                          >
                            {columns[key] === "Price"
                              ? row["Quantity"] * row["Price"]
                              : row[columns[key]]}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOrders;
