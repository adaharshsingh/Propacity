import { useState, useRef, useEffect } from "react";
import searchIcon from "../assets/icons/search.svg";
import citiesData from "../assets/cities.json";
import { useStateContext } from "../Context"; // Import the context
import toast from "react-hot-toast";
import PropTypes from "prop-types";

// Static cities can be declared outside the component to avoid re-creation on every render
const initialCities = ["Lucknow", "Jaipur", "Delhi", "Dubai", "London"];

function SearchBar({ setPlace, setCurrentLocs }) {
  const { place } = useStateContext(); // Access place from context
  const [input, setInput] = useState(""); // Initialize input
  const [filteredCities, setFilteredCities] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const lowercaseInput = value.toLowerCase(); // Avoid multiple calls to toLowerCase
      const results = citiesData
        .filter((city) => city.toLowerCase().startsWith(lowercaseInput))
        .slice(0, 5);
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
    if (!input) {
      toast.error("Please enter a city name");
      return; // Prevent searching if the input is empty
    }

    try {
      await setPlace(input); // Assume setPlace handles the API call internally
      setCurrentLocs((prev) => {
        const updatedArr = [place, ...prev]; // Add recent searched item
        if (updatedArr.length > 3) {
          updatedArr.pop(); // Remove last item if more than 3 items
        }
        return updatedArr;
      });
      setInput(""); // Clear input after search
      setDropdownOpen(false);
    } catch {
      toast.error("City not found");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative max-w-[40rem] flex flex-1 justify-center">
      <div className="bg-white w-full shadow-2xl rounded-full px-4 py-1 gap-3 flex items-center justify-center transition-all duration-300 transform hover:shadow-lg hover:scale-105">
        <img src={searchIcon} alt="search" className="w-[1.5rem] h-[1.5rem]" />

        <input
          type="text"
          placeholder="Search city"
          value={input}
          onChange={handleInputChange}
          onFocus={() => setDropdownOpen(true)}
          onKeyDown={handleKeyPress}
          className="focus:outline-none w-full min-w-[5rem] text-black text-lg bg-transparent placeholder-gray-500"
        />

        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:bg-gradient-to-l hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        >
          Search
        </button>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-white shadow-lg rounded w-full max-w-[40rem] mt-16 z-10"
        >
          <ul className="max-h-40 overflow-y-auto">
            {filteredCities.length > 0
              ? filteredCities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                  >
                    {city}
                  </li>
                ))
              : initialCities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                  >
                    {city}
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  setPlace: PropTypes.func.isRequired,
  setCurrentLocs: PropTypes.func.isRequired,
};

export default SearchBar;
