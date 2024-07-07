import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";

const AdminCreateCanteen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);

  const onInputChange = (e) => {
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
      const res = await fetch("/api1/canteen/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        
        navigate("../admin-canteens");
      }
    } catch (error) {
      console.log("error is " + error);
      alert("canteen creation failed");
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
          <button
            type="submit"
            className="mt-6 text-xl bg-yellow-600 text-black px-4 py-2 rounded-xl mb-3 border border-yellow-600 transition-colors hover:bg-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdminCreateCanteen;