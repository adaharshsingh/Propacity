import React, { useEffect } from "react";
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
import Footer from "./Components/Footer";

const cities = ["Delhi", "Jaipur", "Kolkata"];

function App() {
    const {
        weather,
        thisLocation,
        values,
        place,
        setPlace,
        fetchWeather,
        fetchWeatherByCoords,
    } = useStateContext();
    const [unit, setUnit] = React.useState("C");
    const [currentLocs, setCurrentLocs] = React.useState(() => {
        const storedArray = localStorage.getItem("currentLocs");
        return storedArray ? JSON.parse(storedArray) : cities;
    });

    useEffect(() => {
        if (currentLocs) {
            localStorage.setItem("currentLocs", JSON.stringify(currentLocs));
        }
    }, [currentLocs]);

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
        <div className="app-container w-full h-auto text-white bg-gray-800 bg-opacity-50 shadow-lg flex flex-col">
            <nav className="bg-black opacity-70 border-gray-200 dark:bg-blue-200 w-full my-2 fixed z-10">
                <div className="max-w-screen-xl flex gap-6 flex-wrap items-center justify-between mx-auto p-4 py-0">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-14" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">
                            Propacity
                        </span>
                    </a>
                    <Settings unit={unit} setUnit={setUnit} />
                    <SearchBar setPlace={setPlace} setCurrentLocs={setCurrentLocs} />
                </div>
            </nav>

            <BackgroundLayout />

            <PullToRefreshComponent onRefresh={handleRefresh}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main className="w-full flex flex-col items-center mb-[55px] lg:mt-40 gap-2 py-4 px-[5%] sm:px-[25%] lg:px-[10%]">
                                <div className="hidden w-full items-center lg:flex flex-row flex-wrap justify-center gap-5">
                                    <LocationCard onClick={handleLocationClick} />
                                    {currentLocs.map((city) => (
                                        <CityCard
                                            key={city}
                                            city={city}
                                            onClick={() => handleCityClick(city)}
                                        />
                                    ))}
                                </div>
                                <div className="relative bg-black bg-opacity-50 p-8 mt-8 flex rounded-lg shadow-lg items-center justify-center w-full">
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 justify-center items-center mx-auto">
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
                                        <div className="w-10/12 flex justify-center items-center mx-auto gap-8 flex-wrap mb-32">
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
                                </div>
                            </main>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </PullToRefreshComponent>
        </div>
    );
}

export default App;
