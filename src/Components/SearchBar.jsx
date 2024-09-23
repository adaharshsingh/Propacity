import { useState, useRef, useEffect } from 'react';
import searchIcon from '../assets/icons/search.svg';
import citiesData from '../assets/cities.json';
import { useStateContext } from '../Context'; // Import the context

function SearchBar({ setPlace }) {
  const { place } = useStateContext(); // Access place from context
  const [input, setInput] = useState(place); // Initialize input with the current place
  const [filteredCities, setFilteredCities] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const initialCities = ["Lucknow", "Jaipur", "Delhi", "Dubai", "London"];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const results = citiesData.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 5);
      setFilteredCities(results);
      setDropdownOpen(results.length > 0);
    } else {
      setDropdownOpen(false);
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (city) => {
    setInput(city);
    setPlace(city);
    setFilteredCities([]);
    setDropdownOpen(false);
  };

  const handleSearch = async () => {
    // Call API to check if the city exists
    try {
      await setPlace(input); // Assume setPlace handles the API call internally
      setInput(''); // Clear input after search
      setDropdownOpen(false);
    } catch {
      alert('City not found');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex justify-center">
      <div className="bg-white w-full max-w-[40rem] shadow-2xl rounded p-2 gap-2 flex items-center mt-2">
        <img src={searchIcon} alt="search" className="w-[1.5rem] h-[1.5rem]" />
        <input
          type="text"
          placeholder="Search city"
          value={input}
          onChange={handleInputChange}
          onFocus={() => setDropdownOpen(true)}
          onKeyDown={handleKeyPress} // Handle key press for Enter
          className="focus:outline-none w-full text-black text-lg"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 bg-white bg-opacity-50 shadow-lg rounded w-full max-w-[40rem] mt-16"
        >
          <ul className="max-h-40 overflow-y-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                >
                  {city}
                </li>
              ))
            ) : (
              initialCities.map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                >
                  {city}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
