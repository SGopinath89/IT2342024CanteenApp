import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { useSelector } from "react-redux";

const Cart = () => {
  const columns = ["Food", "Canteen", "Quantity", "Price"];
  const [rows, setRows] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const mappedArr = cartItems.map((cartItem) => {
      return {
        id: cartItem.foodId,
        Food: cartItem.foodName,
        Canteen: cartItem.canteenName,
        Quantity: cartItem.quantity,
        Price: cartItem.foodPrice,
      };
    });

    setRows(mappedArr);
    console.log(mappedArr);
  }, [cartItems]);

  const deleteMethod = () => {};
  return (
    <div className="min-h-screen p-4">
      <Heading heading={"Cart"} />
      <div className="w-full p-4 border border-zinc-200 rounded-md h-[65vh]">
        <div className="flex justify-around">
          {columns.map((column, ind) => (
            <div
              className="flex-1 shrink-0 text-start font-bold text-2xl"
              key={ind}
            >
              {column}
            </div>
          ))}
          <div className="flex-1 shrink-0 text-center font-bold text-2xl">
            Actions
          </div>
        </div>
        <div>
          {rows.map((row, ind) => {
            return (
              <div key={ind} className="flex justify-around items-center">
                <div
                  style={{
                    maxWidth: `${
                      (100 / columns.length) * (columns.length - 1)
                    }vw`,
                  }}
                ></div>
                {Object.entries(row)
                  .filter((entry) => entry[0] != "id")
                  .map((entry, key) => {
                    if (columns[key] == "Quantity") {
                      return (
                        <div
                          className="flex-1 shrink-0 flex justify-start overflow-hidden"
                          key={key}
                        >
                          <input
                            className="border border-black w-24 p-2 rounded-md"
                            type="number"
                            step={1}
                            defaultValue={row.Quantity}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="flex-1 shrink-0 flex justify-start overflow-hidden"
                          key={key}
                        >
                          {row[columns[key]]}
                        </div>
                      );
                    }
                  })}
                <div className="flex justify-center  flex-1">
                  <Button
                    text="Delete"
                    type="delete"
                    id={row.id}
                    onClick={deleteMethod}
                    exist={deleteMethod ? true : false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;