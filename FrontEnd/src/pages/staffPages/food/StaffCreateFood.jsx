import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";
import bread from "./../../../../public/foods/bread.jpg";
import dosa from "./../../../../public/foods/dosa.png";
import friedrice from "./../../../../public/foods/friedrice.webp";
import idly from "./../../../../public/foods/idly.png";
import kottu from "./../../../../public/foods/kottu.webp";
import macaroni from "./../../../../public/foods/macaroni.jpeg";
import milkrice from "./../../../../public/foods/milkrice.jpeg";
import milktea from "./../../../../public/foods/milktea.jpg";
import pancake from "./../../../../public/foods/pancake.webp";
import parata from "./../../../../public/foods/parata.avif";
import plaintea from "./../../../../public/foods/plaintea.png";
import riceandcurry from "./../../../../public/foods/riceandcurry.jpg";
import rolls from "./../../../../public/foods/rolls.png";
import roti from "./../../../../public/foods/roti.png";
import samosa from "./../../../../public/foods/samosa.png";
import stringhoppers from "./../../../../public/foods/stringhoppers.jpg";
import ulunduwade from "./../../../../public/foods/ulunduwade.webp";
import wade from "./../../../../public/foods/wade.jpg";

const StaffCreateFood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const { _id } = useSelector((state) => state.user.currentUser);
  const availableTime = ["Breakfast", "Lunch", "Dinner", "Always"];
  const foodItems = [
    { name: "Bread", imageurl: bread },
    { name: "Dosa", imageurl: dosa },
    { name: "Fried Rice", imageurl: friedrice },
    { name: "Idly", imageurl: idly },
    { name: "Kottu", imageurl: kottu },
    { name: "Macaroni", imageurl: macaroni },
    { name: "Milk Rice", imageurl: milkrice },
    { name: "Milk Tea", imageurl: milktea },
    { name: "Pan Cake", imageurl: pancake },
    { name: "Parata", imageurl: parata },
    { name: "Plain Tea", imageurl: plaintea },
    { name: "Rice And Curry", imageurl: riceandcurry },
    { name: "Rolls", imageurl: rolls },
    { name: "Roti", imageurl: roti },
    { name: "Samosa", imageurl: samosa },
    { name: "String Hoppers", imageurl: stringhoppers },
    { name: "Ulundu Wade", imageurl: ulunduwade },
    { name: "Wade", imageurl: wade },
  ];
  useEffect(() => {
    const getCanteenId = async () => {
      try {
        const res = await fetch(`/api1/canteen/staff/${_id}`);
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
  const onInputChange = (e) => {
    setFormData((curData) => {
      if (e.target.id == "foodname") {
        return {
          ...curData,
          [e.target.id]: e.target.value,
          imageurl: foodItems.find(
            (food) =>
              food.name.toLowerCase().split(" ").join("") == e.target.value
          ).imageurl,
        };
      } else {
        return {
          ...curData,
          [e.target.id]: e.target.value,
        };
      }
    });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("/api1/foods/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        navigate("./../");
      }
    } catch (error) {
      console.log("error is " + error);
      alert("canteen creation failed");
    }
  };
  return (
    <div>
      <Heading heading="Create" />
      <div className="flex justify-center">
        <form onSubmit={(e) => onFormSubmit(e)} className="w-1/3 text-lg">
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="foodname">
              Name
            </label>
            <select
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="text"
              id="foodname"
              onChange={(e) => onInputChange(e)}
            >
              <option value="0">Select Food Item</option>
              {foodItems.map((food, ind) => (
                <option
                  key={ind}
                  value={food.name.toLowerCase().split(" ").join("")}
                >
                  {food.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="price">
              Price
            </label>
            <input
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="text"
              id="price"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="availableTime">
              Available Time
            </label>
            <select
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="text"
              id="availableTime"
              onChange={(e) => onInputChange(e)}
            >
              <option value="0">Select Available Time</option>
              {availableTime.map((time, ind) => (
                <option
                  key={ind}
                  value={time.toLowerCase().split(" ").join("")}
                >
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="image">
              Image
            </label>
            <div className="w-64 h-56 outline-none border border-yellow-600 rounded-md ">
              <img
                src={formData.imageurl}
                className={`size-full ${
                  formData.imageurl ? "" : "hidden"
                } border-none`}
              />
            </div>
          </div>
          <Button type="create" text="Create" />
        </form>
      </div>
    </div>
  );
};

export default StaffCreateFood;