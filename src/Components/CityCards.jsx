import React from "react";

const CityCard = ({ city, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="city-card glassCard2 w-32 h-16 p-2 cursor-pointer flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg opacity-75 hover:opacity-100"
    >
      <p className="font-semibold text-base text-gray-200">{city}</p>
    </div>
  );
};

export default CityCard;
