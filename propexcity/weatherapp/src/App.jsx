import React from "react";
import { useState } from "react";
import "./App.css";
import Clouds from "./cloud.png";
import searchicon from "./search.png";
import snow from "./snow.png";
import Rain from "./storm.png";
import Clear from "./sun.png";
import wind from "./wind.png";
import humidity from "./humidity.png";
import Haze from "./Haze.png";
import Mist from "./Haze.png";
function Weather() {
    const [city, setcity] = useState({
        name: "Chennai",
        country: "IN",
        lat: 13.0827,
        long: 80.2707,
        temp: "",
    });
    const [weather, setweather] = useState(Clear);
    const [additional, setadditional] = useState({
        humid: 100,
        air: 0,

        temp: 34,
    });
    const [loading, setloading] = useState("yes");



    const search = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.temp}&appid=add api`;
        setloading("yes");
        try {
            let res = await fetch(url);
            let data = await res.json();
            setcity({
                ...city,
                name: data.name,
                lat: data.coord.lat,
                long: data.coord.lon,
                country: data.sys.country,
            });
            setadditional({
                ...additional,
                humid: data.main.humidity,
                temp: data.main.temp - 273.15,
                air: data.wind.speed,
            });

            setweather(eval(data.weather[0].main));
        } catch (error) {
            console.error("Error in fetching", error.message);
            setcity({
                ...city,
                name: "City Not Available",
                lat: "---",
                long: "---",
                country: "Not Available",
            });
            setadditional({ ...additional, temp: 0, air: 0, humid: 0 });
        } finally {
            setloading("no");
        }
    };
    return (
        <>
            <div id="container">
                <div id="input-container">
                    <input
                        type="text"
                        name="name"
                        id="city"
                        placeholder="Search city"
                        autoComplete="off"
                        onChange={(e) => {
                            setcity({ ...city, temp: e.target.value });
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                search();
                            }
                        }}

                    />
                    <img
                        src={searchicon}
                        alt="search-icon"
                        id="search-icon"
                        onClick={search}
                    />
                </div>
                {loading === "yes" && (
                    <div id="city-container">
                        <h1 id="loading">
                            PLease wait...
                            <br></br> we are loading
                        </h1>
                        <iframe src="https://lottie.host/embed/df1a0015-60fd-4975-ab04-4d18a9f10392/OP8lc8nBhM.json"></iframe>
                    </div>
                )}
                {loading === "no" && (
                    <div id="city-container">
                        <img src={weather} alt="current-weather" id="current" />

                        <h1 id="cityname">
                            {city.name}--{additional.temp.toFixed(1)}° C
                        </h1>
                        <h1>--{city.country}--</h1>
                        {city.lat == "---" ? (
                            <h1>---</h1>
                        ) : (
                            <h1>Lat:{city.lat.toFixed(6)}° N</h1>
                        )}
                        {city.lat == "---" ? (
                            <h1>---</h1>
                        ) : (
                            <h1>Long:{city.long.toFixed(6)}° E</h1>
                        )}
                    </div>
                )}
                {loading == "no" && (
                    <div id="additional">
                        <span id="humidity">
                            <img src={humidity} alt="Humidity" />
                            <p className="hu">Humidity</p>
                            <h3>{additional.humid}%</h3>
                        </span>
                        <span id="air">
                            <img src={wind} alt="Wind" />
                            <p className="humid">wind Speed</p>
                            <h3>{additional.air}km/hr</h3>
                        </span>
                    </div>
                )}
                {loading == "yes" && (
                    <div id="additional">
                        <span id="humidity">
                            <img src={humidity} alt="Humidity" />
                            <p className="hu">Humidity</p>
                            <h3>----</h3>
                        </span>
                        <span id="air">
                            <img src={wind} alt="Wind" />
                            <p className="humid">wind Speed</p>
                            <h3>----</h3>
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}

export default Weather;
