import React from 'react';
import { MapPin } from 'lucide-react';
import PropTypes from 'prop-types';

const LocationCard = ({ location, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div 
      className="w-[10rem] h-[3rem] flex flex-row items-center justify-between p-2 cursor-pointer rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
      onClick={onClick}
      onKeyDown={handleKeyDown} // Handle Enter and Space key press for accessibility
      aria-label={`Location: ${location}`}
      tabIndex="0" // Added tabIndex for better keyboard navigation
    >
      <div className="flex items-center justify-center h-full">
        <MapPin size={15} aria-hidden="true" /> {/* Corrected typo and added aria-hidden */}
      </div>
      <p className="text-center font-bold">{location}</p>
    </div>
  );
};

LocationCard.propTypes = {
  location: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LocationCard.defaultProps = {
  location: "Current Location", // Define default value for location explicitly
};

export default LocationCard;
