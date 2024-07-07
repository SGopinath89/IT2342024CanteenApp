import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Table from "../../components/Table";

const AdminCanteens = () => {
  const columns = [1, 2, 3, 4, 5];
  const rows = [
    { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
    { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
  ];

  return (
    <div>
      <Heading heading="Canteen" />
      <div className="flex flex-col items-end p-5">
        <Button text="Create" type="create" />
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default AdminCanteens;