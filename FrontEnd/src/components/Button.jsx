import React from "react";

const Button = ({ text, type }) => {
  return (
    <button
      type="submit"
      className={`mt-6 ${
        type == "default"
          ? "bg-yellow-600 border-yellow-600"
          : type == "create"
          ? "bg-green-400 border-green-400"
          : type == "edit"
          ? "bg-blue-400 border-blue-400"
          : "bg-red-400 border-red-400"
      } text-xl text-black px-4 py-2 rounded-xl mb-3 border transition-colors hover:bg-white`}
    >
      {text}
    </button>
  );
};

export default Button;