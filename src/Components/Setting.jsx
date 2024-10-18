import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ unit, setUnit }) => {
  const toggleUnitSystem = () => {
    setUnit(unit === 'C' ? 'F' : 'C'); // Toggle between Celsius and Fahrenheit
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleUnitSystem}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded md:px-3 transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        aria-label={`Switch to ${unit === 'C' ? 'US System (°F)' : 'SI System (°C)'}`}
      >
        Switch to {unit === 'C' ? 'US System (°F)' : 'SI System (°C)'}
      </button>
    </div>
  );
};

Settings.propTypes = {
  unit: PropTypes.oneOf(['C', 'F']).isRequired, // Ensure unit is either 'C' or 'F'
  setUnit: PropTypes.func.isRequired, // Ensure setUnit is a function
};

export default Settings;
