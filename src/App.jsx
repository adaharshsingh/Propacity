import React from 'react';
import './App.css';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components';
import SearchBar from './Components/SearchBar';
import Settings from './Components/Setting';
import logo from './assets/icons/logo.png'

import PullToRefreshComponent from './Components/PullToRefreshComponent';

function App() {
  const { weather, thisLocation, values, place, setPlace, fetchWeather } = useStateContext(); // Add fetchWeather
  const [unit, setUnit] = React.useState('C'); // State to manage the temperature unit

  // Function to convert temperature based on the selected unit
  const convertTemperature = (temp) => {
    return unit === 'C' ? temp : Math.round(temp * 1.8) + 32;
  };

  // Function to handle refresh
  const handleRefresh = async () => {
    console.log("Refreshing weather data...");
    await fetchWeather(); // Call the fetchWeather function
  };

  return (
    <div className="w-full h-screen text-white">
      <nav className="bg-white border-gray-200 dark:bg-blue-200 w-full my-2 fixed z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-0">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-14" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">Propacity</span>
          </a>
          <Settings unit={unit} setUnit={setUnit} />
          <SearchBar setPlace={setPlace} />
        </div>
      </nav>


      <BackgroundLayout />
      <PullToRefreshComponent onRefresh={handleRefresh}>
        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
            isCelsius={unit === 'C'}
          />
          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={convertTemperature(curr.temp)}
                iconString={curr.conditions}
                isCelsius={unit === 'C'}
              />
            ))}
          </div>
        </main>
      </PullToRefreshComponent>
    </div>
  );
}

export default App;
