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

const cities = ["Delhi", "Jaipur", "Kolkata"];

function App() {
  const { weather, thisLocation, values, place, setPlace, fetchWeather } =
    useStateContext();
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

  return (
    <div className="w-full h-screen text-white bg-gray-800 bg-opacity-50 shadow-lg flex flex-col">
      <nav className="bg-white border-gray-200 dark:bg-blue-200 w-full my-2 fixed z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-0">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-14" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">
              Propacity
            </span>
          </a>
          <Settings unit={unit} setUnit={setUnit} />
          <SearchBar setPlace={setPlace} />
        </div>
      </nav>

      <BackgroundLayout />

      <PullToRefreshComponent onRefresh={handleRefresh}>
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full flex flex-wrap mt-10  lg:mt-40 gap-2 py-4 px-[5%] sm:px-[10%] items-center justify-center">
                <div className="hidden lg:flex justify-center gap-8 flex-wrap w-full sm:w-[40%]">
                  {cities.map((city) => (
                    <CityCard
                      key={city}
                      city={city}
                      onClick={() => handleCityClick(city)}
                    />
                  ))}
                </div>
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
                  <div className="flex justify-center gap-8 flex-wrap w-full sm:w-[60%] ">
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
