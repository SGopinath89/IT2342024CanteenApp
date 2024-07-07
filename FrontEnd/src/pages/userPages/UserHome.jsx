import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

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
      <Heading heading="User Portal" />
      <div className="flex justify-center">
        {canteens.map((canteen) => {
          return (
            <>
              <Link
                to={`./canteen/${canteen.name}`}
                state={{ canteenId: canteen._id }}
              >
                <Button text={canteen.name} type="default" />
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserHome;