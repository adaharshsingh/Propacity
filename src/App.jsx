import React from 'react';
import './App.css';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components';
import SearchBar from './Components/SearchBar';
import Settings from './Components/Setting';
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
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <Settings unit={unit} setUnit={setUnit} />
        <SearchBar setPlace={setPlace} />
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
