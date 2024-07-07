import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { Link, useNavigate } from "react-router-dom";

const AdminCanteens = () => {
  const navigate = useNavigate();
  const columns = ["Name", "Description", "Open Time", "Close Time"];
  const [rows, setRows] = useState([]);

  const fetchCanteens = async () => {
    try {
      const res = await fetch("/api1/canteen/");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        const mapedArray = data.map((canteen) => {
          return {
            id: canteen._id,
            Name: canteen.name,
            Description: canteen.description,
            "Open Time": canteen.opentime,
            "Close Time": canteen.closetime,
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
      const res = await fetch(`/api1/canteen/${id}`, { method: "DELETE" });
      if (res.ok) {
        console.log("deleted");
        fetchCanteens();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editMethod = async (id) => {
    navigate(`./update/${id}`);
  };

  useEffect(() => {
    
    fetchCanteens();
  }, []);

  return (
    <div>
      <Heading heading="Canteen" />

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
export default AdminCanteens;