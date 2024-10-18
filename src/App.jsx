import React, { useEffect, useCallback } from "react";
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

const defaultCities = ["Delhi", "Jaipur", "Kolkata"];

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
    const [currentLocations, setCurrentLocations] = React.useState(() => {
        const storedArray = localStorage.getItem("currentLocs");
        return storedArray ? JSON.parse(storedArray) : defaultCities;
    });

    useEffect(() => {
        localStorage.setItem("currentLocs", JSON.stringify(currentLocations));
    }, [currentLocations]);

    const convertTemperature = (temp) => {
        return unit === "C" ? temp : Math.round(temp * 1.8) + 32;
    };

    const handleRefresh = async () => {
        console.log("Refreshing weather data...");
        await fetchWeather();
    };

    const handleCityClick = useCallback(async (city) => {
        setPlace(city);
        await fetchWeather();
    }, [fetchWeather, setPlace]);

    const handleLocationClick = useCallback(async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    await fetchWeatherByCoords(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Unable to retrieve your location. Please check your browser settings.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, [fetchWeatherByCoords]);

    return (
        <div className="w-full h-screen text-white bg-gray-800 bg-opacity-50 shadow-lg flex flex-col">
            <nav className="bg-black opacity-70 border-gray-200 dark:bg-blue-200 w-full my-2 fixed z-10">
                <div className="max-w-screen-xl flex gap-6 flex-wrap items-center justify-between mx-auto p-4 py-0">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-14" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-900">
                            Propacity
                        </span>
                    </a>
                    <Settings unit={unit} setUnit={setUnit} />
                    <SearchBar setPlace={setPlace} setCurrentLocs={setCurrentLocations} />
                </div>
            </nav>

            <BackgroundLayout />

            <PullToRefreshComponent onRefresh={handleRefresh}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main className="w-full flex flex-row flex-wrap mx-auto mt-10 mb-[240px] lg:mt-40 gap-2 py-4 px-[5%] sm:px-[25%] lg:px-[10%] items-start justify-center">
                                <div className="hidden w-full items-center lg:flex flex

