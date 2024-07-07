import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeItem } from "../../../redux/user/cartSlice";

const Cart = () => {
  const columns = ["Food", "Canteen", "Quantity", "Price"];
  const [rows, setRows] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);

const dispatch = useDispatch();

const onQuantityChange = (e) => {
    dispatch(changeQuantity({ foodId: e.target.id, quantity: e.target.value }));
  };

const deleteMethod = (id) => {
    dispatch(removeItem({ foodId: id }));
    window.location.reload();
  };
  
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
                            onChange={(e) => onQuantityChange(e)}
                            id={row.id}
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