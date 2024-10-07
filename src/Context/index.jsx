import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Jaipur');
    const [thisLocation, setLocation] = useState('');
    const [isToastVisible, setToastVisible] = useState(false); 

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
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);
            localStorage.setItem('weatherData', JSON.stringify({
                location: thisData.address,
                weather: thisData.values[0],
                values: thisData.values
            }));
            setToastVisible(false); 
        } catch (e) {
            console.error(e);
            if (!isToastVisible) {
                toast((t) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>This place does not exist</span>
                        <button
                            style={{
                                background: 'red',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '10px',
                            }}
                            onClick={() => {
                                toast.dismiss(t.id);  
                                setToastVisible(false);  
                            }}
                        >
                            &#10005; 
                        </button>
                    </div>
                ), {
                    id: 'weather-error',
                    duration: Infinity, 
                });
                setToastVisible(true); 
            }
        }
    };

    const fetchWeatherByCoords = async (latitude, longitude) => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: `${latitude},${longitude}`,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
            },
        };

        try {
            const response = await axios.request(options);
            const thisData = Object.values(response.data.locations)[0];

            const geoResponse = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
                headers: {
                    'User-Agent': `Propacity/1.0 (${import.meta.env.VITE_EX_EMAIL})`,
                }
            });
            const placeName = geoResponse.data.address.city || geoResponse.data.address.town || geoResponse.data.address.village || `${latitude}, ${longitude}`;

            setLocation(placeName);
            setValues(thisData.values);
            setWeather(thisData.values[0]);
            setPlace(placeName);  

            localStorage.setItem('weatherData', JSON.stringify({
                location: placeName,
                weather: thisData.values[0],
                values: thisData.values,
            }));
            setToastVisible(false); 
        } catch (e) {
            console.error(e);
            if (!isToastVisible) {
                toast((t) => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Failed to fetch weather data for your location</span>
                        <button
                            style={{
                                background: 'red',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '10px',
                            }}
                            onClick={() => {
                                toast.dismiss(t.id);
                                setToastVisible(false);
                            }}
                        >
                            &#10005; 
                        </button>
                    </div>
                ), {
                    id: 'coords-error',
                    duration: Infinity,
                });
                setToastVisible(true); 
            }
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    useEffect(() => {
        const cachedData = localStorage.getItem('weatherData');
        if (cachedData) {
            const { location, weather, values } = JSON.parse(cachedData);
            setLocation(location);
            setWeather(weather);
            setValues(values);
            setPlace(location);
        }
    }, []);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            fetchWeather,
            fetchWeatherByCoords
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
