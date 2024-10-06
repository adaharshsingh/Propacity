import React from "react";

const CityCard = ({ city, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="city-card glassCard w-[8rem] h-[3rem] p-2 cursor-pointer flex flex-col justify-center items-center text-center opacity-75 hover:opacity-100 transition-opacity"
    >
      <p className="font-bold text-lg">{city}</p>
    </div>
  );
};

export default CityCard;
