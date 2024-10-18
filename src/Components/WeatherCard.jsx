import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../index.css';

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
  isCelsius,
}) => {
  const [icon, setIcon] = useState(sun); // Default to sun icon
  const { time } = useDate();

  useEffect(() => {
    if (!iconString) return; // Early exit if no iconString

    const condition = iconString.toLowerCase();
    switch (true) {
      case condition.includes('cloud'):
        setIcon(cloud);
        break;
      case condition.includes('rain'):
        setIcon(rain);
        break;
      case condition.includes('clear'):
        setIcon(sun);
        break;
      case condition.includes('thunder'):
        setIcon(storm);
        break;
      case condition.includes('fog'):
        setIcon(fog);
        break;
      case condition.includes('snow'):
        setIcon(snow);
        break;
      case condition.includes('wind'):
        setIcon(wind);
        break;
      default:
        setIcon(sun); // Fallback to sun
        break;
    }
  }, [iconString]);

  const convertTemperature = (temp) => {
    if (isNaN(temp)) return '--'; // Return placeholder if temp is not a valid number
    return isCelsius ? temp : Math.round((temp * 1.8) + 32);
  };

  return (
    <div className="weather-card custom-max:w-[18rem] w-[22rem] custom-max:h-[30rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4 custom-max:gap-2">
        <img className="weather-icon w-[5rem]" src={icon} alt={`Icon representing ${conditions}`} />
        <p className="font-bold custom-max:text-4xl text-5xl flex justify-center items-center">
          {convertTemperature(temperature)} &deg;{isCelsius ? 'C' : 'F'}
        </p>
      </div>
      <div className="font-bold text-center custom-max:text-lg text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold text-base bg-blue-600 shadow rounded-lg">
          Wind Speed <span className="font-normal">{windspeed} km/h</span>
        </p>
        <p className="flex-1 text-center p-2 font-bold text-base rounded-lg bg-green-600">
          Humidity <span className="font-normal">{humidity} gm/m&#179;</span>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold custom-max:text-base text-lg">Heat Index</p>
        <p className="custom-max:text-base text-lg">{heatIndex}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl custom-max:text-2xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
