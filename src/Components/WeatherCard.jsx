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
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  const convertTemperature = (temp) => {
    return isCelsius ? temp : Math.round((temp * 1.8) + 32);
  };

  return (
    <div className='weather-card w-[28rem] h-[30rem] bg-white/80 shadow-lg rounded-xl p-10 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-xl hover:scale-105'>
      <div className='flex justify-center items-center gap-4'>
        <img className='w-[4.5rem]' src={icon} alt="weather_icon" />
        <p className='text-5xl font-bold text-gray-800'>{convertTemperature(temperature)}&deg;{isCelsius ? 'C' : 'F'}</p>
      </div>
      <div className='text-center text-xl font-semibold text-gray-700'>{place}</div>
      <div className='w-full flex justify-between text-gray-600 text-sm'>
        <p>{new Date().toDateString()}</p>
        <p>{time}</p>
      </div>
      <div className='w-full flex justify-between mt-4 gap-4'>
        <p className='w-1/2 text-center p-2 bg-blue-500 text-white rounded-lg'>Wind Speed: {windspeed} km/h</p>
        <p className='w-1/2 text-center p-2 bg-green-500 text-white rounded-lg'>Humidity: {humidity} gm/m³</p>
      </div>
      <div className='w-full flex justify-between items-center p-3 bg-gray-100 rounded-lg'>
        <p className='font-semibold text-gray-700'>Heat Index</p>
        <p className='text-gray-700'>{heatIndex}</p>
      </div>
      <div className='w-full flex justify-center text-2xl font-semibold text-gray-800'>{conditions}</div>
    </div>

  );
};

export default WeatherCard;
