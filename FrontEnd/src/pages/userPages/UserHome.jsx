import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import LogoutButton from "../../components/LogoutButton";

const UserHome = () => {
  const [canteens, setCanteens] = useState([]);

  useEffect(() => {
    const fetchCanteens = async () => {
      try {
        const res = await fetch("/api1/canteen/");

        if (res.ok) {
          const data = await res.json();

          console.log(data);
          setCanteens(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCanteens();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <LogoutButton />
      <Heading heading="User Portal" />
      <div className="flex justify-center">
        {canteens.map((canteen, ind) => {
          return (
            <div key={ind}>
              <Link
                to={`./canteen/${canteen.name}`}
                state={{ canteenId: canteen._id }}
              >
                <Button text={canteen.name} type="default" />
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserHome;
