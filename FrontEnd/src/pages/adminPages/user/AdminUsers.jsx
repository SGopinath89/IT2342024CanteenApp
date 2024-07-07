import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const navigate = useNavigate();

  const columns = ["Registration No", "Telephone", "User Type"];
  const [rows, setRows] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api1/user/");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        const mapedArray = data.user.map((user) => {
          return {
            id: user._id,
            "Registration No": user.registrationnumber,
            Telephone: user.telephone,
            "User Type": user.usertype,
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
      const res = await fetch(`/api1/user/${id}`, { method: "DELETE" });

      if (res.ok) {
        console.log("deleted");
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(123);
    fetchUsers();
  }, []);

  return (
    <div>
      <Heading heading="Users" />

      <div className="flex flex-col items-end p-5">
        <Table columns={columns} rows={rows} deleteMethod={deleteMethod} />
      </div>
    </div>
  );
};

export default AdminUsers;