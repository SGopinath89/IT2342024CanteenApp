import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { useSelector } from "react-redux";
import bread from "./../../../assets/images/foods/bread.jpg";
import dosa from "./../../../assets/images/foods/dosa.png";
import friedrice from "./../../../assets/images/foods/friedrice.webp";
import idly from "./../../../assets/images/foods/idly.png";
import kottu from "./../../../assets/images/foods/kottu.webp";
import macaroni from "./../../../assets/images/foods/macaroni.jpeg";
import milkrice from "./../../../assets/images/foods/milkrice.jpeg";
import milktea from "./../../../assets/images/foods/milktea.jpg";
import pancake from "./../../../assets/images/foods/pancake.webp";
import parata from "./../../../assets/images/foods/parata.avif";
import plaintea from "./../../../assets/images/foods/plaintea.png";
import riceandcurry from "./../../../assets/images/foods/riceandcurry.jpg";
import rolls from "./../../../assets/images/foods/rolls.png";
import roti from "./../../../assets/images/foods/roti.png";
import samosa from "./../../../assets/images/foods/samosa.png";
import stringhoppers from "./../../../assets/images/foods/stringhoppers.jpg";
import ulunduwade from "./../../../assets/images/foods/ulunduwade.webp";
import wade from "./../../../assets/images/foods/wade.jpg";

const StaffFood = () => {
  const navigate = useNavigate();

  const columns = ["Name", "Image", "Price", "AvailableTime"];
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({});
  const { _id } = useSelector((state) => state.user.currentUser);

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

  const fetchFoods = async () => {
    try {
      const res = await fetch("/api1/foods/");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        const mapedArray = data.map((food) => {
          return {
            id: food._id,
            Name: foodItems[
              foodItems.findIndex((foodItem) => {
                return (
                  foodItem.name.toLowerCase().split(" ").join("") ==
                  food.foodname
                );
              })
            ].name,
            Image: (
              <img
                src={food.imageurl}
                style={{
                  width: "150px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
            ),
            Price: food.price,
            AvailableTime: food.availableTime,
          };
        });

        setRows(mapedArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMethod = async (id) => {
    try {
        const res = await fetch(`/api1/foods/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

      if (res.ok) {
        console.log("deleted");
        fetchFoods();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editMethod = async (id) => {
    navigate(`./update/${id}`);
  };

  useEffect(() => {
    
    fetchFoods();
  }, []);

  return (
    <div>
     <Heading heading="Foods" />

      <div className="flex flex-col items-end p-5">
        <Link to="./create">
          <Button text="Create" type="create" />
        </Link>
        <Table
          columns={columns}
          rows={rows}
          deleteMethod={deleteMethod}
          editMethod={editMethod}
        />
      </div>
    </div>
  );
};

export default StaffFood;