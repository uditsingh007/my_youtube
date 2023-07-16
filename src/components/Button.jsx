import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-gray-500 rounded-lg px-3 py-2 text-white hover:bg-gray-400 transition">
        {text}
      </button>
    </div>
  );
};

export default Button;
