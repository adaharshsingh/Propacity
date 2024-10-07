import React from "react";
import "./App.css";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";
import SearchBar from "./Components/SearchBar";
import Settings from "./Components/Setting";
import logo from "./assets/icons/logo.png";
import PullToRefreshComponent from "./Components/PullToRefreshComponent";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/404";
import CityCard from "./Components/CityCards";
import LocationCard from "./Components/LocationCard";

const cities = ["Delhi", "Jaipur", "Kolkata"];

function App() {
  const { weather, thisLocation, values, place, setPlace, fetchWeather, fetchWeatherByCoords } = useStateContext();
  const [unit, setUnit] = React.useState("C");

  const convertTemperature = (temp) => {
    return unit === "C" ? temp : Math.round(temp * 1.8) + 32;
  };

  const handleRefresh = async () => {
    console.log("Refreshing weather data...");
    await fetchWeather();
  };

  const handleCityClick = async (city) => {
    setPlace(city);
    await fetchWeather();
  };

  const handleLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full h-screen text-white bg-gray-800 bg-opacity-50 shadow-lg flex flex-col">
      <nav className="bg-black bg-opacity-70 border-b border-gray-200 dark:bg-blue-800 fixed w-full z-10 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center space-x-3">
            <img src={logo} className="h-14" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold text-white">Propacity</span>
          </a>

          <div className="flex items-center space-x-4">
            <SearchBar setPlace={setPlace} />
            <Settings unit={unit} setUnit={setUnit} />
          </div>
        </div>
      </nav>


      <BackgroundLayout />

      <PullToRefreshComponent onRefresh={handleRefresh}>
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full mt-10 flex flex-wrap gap-2 py-4 px-[5%] sm:px-[10%] items-center justify-center">

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 p-8 lg:p-0 justify-center items-center">
                  <WeatherCard
                    place={thisLocation}
                    windspeed={weather.wspd}
                    humidity={weather.humidity}
                    temperature={weather.temp}
                    heatIndex={weather.heatindex}
                    iconString={weather.conditions}
                    conditions={weather.conditions}
                    isCelsius={unit === "C"}
                  />
                  <div className=" ml-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-[60%]">
                    {values?.slice(1, 7).map((curr) => (
                      <MiniCard
                        key={curr.datetime}
                        time={curr.datetime}
                        temp={convertTemperature(curr.temp)}
                        iconString={curr.conditions}
                        isCelsius={unit === "C"}
                      />
                    ))}
                  </div>



                  <div className="hidden mt-36 lg:flex justify-end gap-4 flex-wrap w-full sm:w-[40%]">
                    <LocationCard onClick={handleLocationClick} />
                    {cities.map((city) => (
                      <CityCard
                        key={city}
                        city={city}
                        onClick={() => handleCityClick(city)}
                      />
                    ))}
                  </div>

                </div>

              </main>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PullToRefreshComponent>
    </div>
  );
}

export default App;
