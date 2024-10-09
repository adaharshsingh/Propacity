import { useStateContext } from '../Context';
import React from 'react';

const Settings = () => {
  const { unit ,setUnit} = useStateContext();
  const toggleUnitSystem = () => {
    setUnit(unit === 'C' ? 'F' : 'C'); // Toggle between Celsius and Fahrenheit
  };

  return (
    <div className="flex items-center">
      <button 
        onClick={toggleUnitSystem} 
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded md:px-3 "
      >
        Switch to {unit === 'C' ? 'US System (°F)' : 'SI System (°C)'}
      </button>
    </div>
  );
};

export default Settings;
