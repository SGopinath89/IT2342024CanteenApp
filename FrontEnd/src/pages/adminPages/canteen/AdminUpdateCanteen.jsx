import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import BackButton from "../../../components/BackButton";
import LogoutButton from "../../../components/LogoutButton";

const AdminUpdateCanteen = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    closetime: "",
    opentime: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchIntialFormData = async () => {
      try {
        const res = await fetch(`/api1/canteen/${id}`);

        if (res.ok) {
          const data = await res.json();
          console.log(data);

          const { name, description, closetime, opentime } = data[0];
          setFormData({ name, description, closetime, opentime });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchIntialFormData();
  }, []);

  const onInputChange = (e) => {
    console.log(formData);
    setFormData((curData) => {
      return {
        ...curData,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api1/canteen/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        navigate("./../../");
      }
    } catch (error) {
      console.log("error is " + error);
      alert("canteen updating failed");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api1/user/");

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setUsers(data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <BackButton to="./../../" />
      <LogoutButton />
      <Heading heading="Canteen" />
      <div className="flex justify-center">
        <form onSubmit={(e) => onFormSubmit(e)} className="w-1/3 text-lg">
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="name">
              Name
            </label>
            <input
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="text"
              id="name"
              onChange={(e) => onInputChange(e)}
              value={formData.name}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="opentime">
              Open Time{" "}
            </label>
            <input
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="time"
              id="opentime"
              onChange={(e) => onInputChange(e)}
              value={formData.opentime}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="closetime">
              Close Time
            </label>
            <input
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              type="time"
              id="closetime"
              onChange={(e) => onInputChange(e)}
              value={formData.closetime}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              id="description"
              onChange={(e) => onInputChange(e)}
              value={formData.description}
            />
          </div>
          <div className="flex justify-between mb-2">
            <label className="inline-block" htmlFor="description">
              Staff
            </label>
            <select
              className="w-64 outline-none border border-yellow-600 rounded-md px-3 py-1"
              id="adminid"
              onChange={(e) => onInputChange(e)}
            >
              <option value="0">Select Staff Id</option>
              {users
                .filter((user) => user.usertype == "staff")
                .map((user) => (
                  <option key={user.username} value={user._id}>
                    {user.username}
                  </option>
                ))}
            </select>
          </div>

          <Button type="edit" text="Update" />
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateCanteen;
