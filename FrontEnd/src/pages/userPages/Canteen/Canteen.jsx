import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Heading from "../../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../../VanniEats/FrontEnd/src/redux/user/cartSlice";
import Button from "../../../components/Button";

const Canteen = () => {
  const { canteenId } = useLocation().state;
  const [foods, setFoods] = useState([]);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const foodItems = [
    "Bread",
    "Dosa",
    "Fried Rice",
    "Idly",
    "Kottu",
    "Macaroni",
    "Milk Rice",
    "Milk Tea",
    "Pan Cake",
    "Parata",
    "Plain Tea",
    "Rice And Curry",
    "Rolls",
    "Roti",
    "Samosa",
    "String Hoppers",
    "Ulundu Wade",
    "Wade",
  ];

  const { name } = useParams();

  const onAddToCartClick = (e) => {
    const [foodId, foodName, foodPrice] = e.target.id.split("/");
    let cartObj = {
      foodId,
      foodName,
      foodPrice: +foodPrice,
      quantity: 1,
      canteenId,
      canteenName: name,
    };
    dispatch(addToCart(cartObj));
  };

  useEffect(() => {
    const fetchFoods = async () => {
  
      try {
        const res = await fetch(`/api1/foods/canteen/${canteenId}`);

        if (res.ok) {
          const data = await res.json();
          setFoods(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchFoods();
  }, [canteenId]);

  return (
    <div className="min-h-screen">
      <Heading heading={name} />
      <Link
        to={`./../../cart/${name}`}
        state={{ canteenId }}
        className="absolute right-5 top-5"
      >
        <Button text="My Cart" type="default" />
      </Link>
      <div className="h-full p-8 flex">
        {foods.map((food, ind) => {
          const foodInCart = cartItems.some((item) => item.foodId === food._id);

          return (
            <div
              key={ind}
                className="w-60 h-72 border border-yellow-600 rounded-md overflow-hidden m-4"
            >
              <div className="w-60 h-48">
                <img
                  src={`../../../../public/foods/${food.imageurl
                    .split("/")
                    .slice(-1)}`}
                  className="h-full w-full"
                  alt={food.foodname}
                />
              </div>
              <div className="flex justify-between flex-col p-3">
                <div className="flex justify-between">
                  <p>
                    {foodItems.find(
                      (item) =>
                        item.toLowerCase().split(" ").join("") === food.foodname
                    )}
                  </p>
                  <p>Rs.{food.price}/=</p>
                </div>
                <div className="p-1 flex justify-center items-end">
                  <button
                    onClick={onAddToCartClick}
                    id={food._id + "/" + food.foodname + "/" + food.price}
                    className={`border bg-yellow-400 border-yellow-600 transition-colors py-2 px-6 rounded-md  ${
                      foodInCart ? "opacity-50" : "hover:bg-white"
                    }`}
                    disabled={foodInCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Canteen;