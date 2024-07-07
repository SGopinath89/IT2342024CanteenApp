import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderFinished } from "../../../redux/user/cartSlice";

const Order = () => {
  const columns = ["Item", "Quantity", "Price"];
  const [rows, setRows] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const { canteenId } = useLocation().state;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPayClick = async () => {
    const foods = cartItems
      .filter((item) => item.canteenId == canteenId)
      .map((item) => {
        return {
          foodid: item.foodId,
          foodname: item.foodName,
          count: item.quantity,
        };
      });

    let body = {
      canteenid: canteenId,
      foods,
      payment: total,
      buyer: currentUser._id,
    };

    console.log(body);
    try {
      const res = await fetch("/api1/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.success) {
          dispatch(orderFinished());
          alert("Your order successfull");
          navigate("./../");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const mappedArr = cartItems.map((cartItem) => {
      return {
        id: cartItem.foodId,
        Item: cartItem.foodName,
        Quantity: cartItem.quantity,
        Price: cartItem.foodPrice,
      };
    });

    setRows(mappedArr);

    const calculatedTotal = mappedArr.reduce(
      (acc, item) => acc + item.Quantity * item.Price,
      0
    );

    setTotal(calculatedTotal);
  }, [cartItems]);

  return (
    <div className="min-h-screen">
      <Heading heading="Your Order" />
      <div className="flex justify-center">
        <div className="w-2/5 min-h-96 border border-yellow-600 rounded-lg">
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

          <div className="flex justify-between m-4">
            <p className="text-2xl font-bold">Total: Rs.{total}/=</p>
            <button
              onClick={onPayClick}
              className="bg-green-400 border-green-400 text-xl text-black px-4 py-2 rounded-xl mb-3 border transition-colors hover:bg-white"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;