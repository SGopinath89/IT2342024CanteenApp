import React, { useEffect, useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

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
  return <div>AdminUsers</div>;
};

export default AdminUsers;