import React from 'react';
import { MapPin } from 'lucide-react';

const LocationCard = ({ onClick }) => {
  return (
    <div 
      className="w-32 h-16 flex flex-row items-center justify-between p-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-200"
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full">
        <MapPin size={15} />
      </div>
      <p className="text-center font-semibold text-sm">Current Location</p>
    </div>
  );
};

export default LocationCard;
