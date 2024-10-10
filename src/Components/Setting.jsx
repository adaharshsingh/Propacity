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
        className="bg-blue-500 text-white font-semibold px-3 py-1 rounded text-sm md:px-4 md:py-2 md:text-base"
      >
        Switch to {unit === 'C' ? 'US System (°F)' : 'SI System (°C)'}
      </button>
    </div>
  );
};

export default Settings;
