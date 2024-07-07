import React from "react";

const Heading = ({ heading }) => {
  console.log(heading);

  return (
    <h2 className="text-5xl text-red-600 font-light text-center my-16">
      {heading}
    </h2>
  );
};

export default Heading;