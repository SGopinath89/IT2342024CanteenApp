import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Heading from "../../../components/Heading";

const Canteen = () => {
  const { canteenId } = useLocation().state;
  const [foods, setFoods] = useState([]);

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
  console.log(canteenId);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch(`/api1/foods/canteen/${canteenId}`);

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setFoods(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="min-h-screen">
      <Heading heading={name} />
      <div className="h-full p-8 flex ">
        {foods.map((food, ind) => {
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
                />
              </div>
              <div className="flex justify-between flex-col p-3">
                <div className="flex justify-between">
                  <p>
                    {foodItems.find(
                      (item) =>
                        item.toLowerCase().split(" ").join("") == food.foodname
                    )}
                  </p>
                  <p>Rs.{food.price}/=</p>
                </div>
                <div className="p-1 flex justify-center items-end">
                  <button
                    id={food._id}
                    className="bg-yellow-400 border border-yellow-600 transition-colors py-2 px-6 rounded-md hover:bg-white"
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