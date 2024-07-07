import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  useEffect(() => {
    const fetchCanteens = async () => {
      try {
        const res = await fetch("/api1/canteen/");

        if (res.ok) {
          const data = await res.json();

          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCanteens();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-3xl my-6">Canteens</h2>
      <div>
        <Link
          to="/signin"
          className="text-xl bg-yellow-600 text-black px-4 py-2 rounded-xl mb-3 border border-yellow-600 transition-colors hover:bg-white"
        >
          Applied
        </Link>
      </div>
    </div>
  );
};

export default UserHome;