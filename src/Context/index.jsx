import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Jaipur');
    const [thisLocation, setLocation] = useState('');

    // Function to fetch weather data
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response)
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);

            // Cache the data in localStorage
            localStorage.setItem('weatherData', JSON.stringify({
                location: thisData.address,
                weather: thisData.values[0],
                values: thisData.values
            }));
        } catch (e) {
            console.error(e);
            toast.error("This place does not exist");
        }
    };

    // Effect to fetch weather data on place change
    useEffect(() => {
        fetchWeather();
    }, [place]);

    // Check for cached data on initial load
    useEffect(() => {
        const cachedData = localStorage.getItem('weatherData');
        if (cachedData) {
            const { location, weather, values } = JSON.parse(cachedData);
            setLocation(location);
            setWeather(weather);
            setValues(values);
            setPlace(location); // Set place to cached location for consistency
        }
    }, []);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            fetchWeather // Export fetchWeather for refreshing data
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
