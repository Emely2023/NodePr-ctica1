import React from "react";

const Button = ({ label, actionButton, colorClass, type="button" }) => {
  let className = ""

  if(colorClass === "primary") {
        className="m-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
  }
  else if(colorClass === "secondary") {
        className="m-1 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
  }
  else if(colorClass === "danger") {
        className="m-1 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
  }
  else if (colorClass === "warning") {
        className="ml-2 mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
  }
  else className="m-1 px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600"

  return (
    <button
      type={type}
      className={className}
      onClick={actionButton}
    >
      {label}
    </button>
  );
};
export default Button;
