import React from "react";
import "./App.css";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";
import SearchBar from "./Components/SearchBar";
import Settings from "./Components/Setting";
import logo from "./assets/icons/logo.png";
import PullToRefreshComponent from "./Components/PullToRefreshComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/404";
import TimeBasedStoreComponent from "./TimeBasedKeyValueStore/TimeBasedStoreComponent"; // Import your Time-Based Key-Value Store Component

function App() {
  const { weather, thisLocation, values, place, setPlace, fetchWeather } = useStateContext();
  const [unit, setUnit] = React.useState("C");

  // Function to convert temperature based on selected unit
  const convertTemperature = (temp) => {
    return unit === "C" ? temp : Math.round(temp * 1.8) + 32;
  };

  // Function to handle weather data refresh
  const handleRefresh = async () => {
    console.log("Refreshing weather data...");
    await fetchWeather();
  };

  return (
    <Router>
      <div className="w-full h-screen text-white bg-gray-800 bg-opacity-50 shadow-lg flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white border-gray-200 dark:bg-blue-200 w-full my-2 fixed z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-0">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-14" alt="Propacity Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">
                Propacity
              </span>
            </a>
            <Settings unit={unit} setUnit={setUnit} />
            <SearchBar setPlace={setPlace} />
          </div>
        </nav>

        {/* Background and Refreshable Component */}
        <BackgroundLayout />
        <PullToRefreshComponent onRefresh={handleRefresh}>
          <Routes>
            <Route
              path="/"
              element={
                <main className="w-full flex flex-wrap mt-20 lg:mt-40 gap-8 py-4 px-[5%] sm:px-[10%] items-center justify-center">
                  {/* WeatherCard Component */}
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

                  {/* MiniCards for Forecast */}
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

                  {/* Include Time-Based Key-Value Store Component Here */}
                  <TimeBasedStoreComponent />
                </main>
              }
            />
            {/* Route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PullToRefreshComponent>
      </div>
    </Router>
  );
}

export default App;
