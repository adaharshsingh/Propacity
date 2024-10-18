import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString, isCelsius }) => {
  const [icon, setIcon] = useState(sun); // Default icon

  useEffect(() => {
    if (iconString) {
      const condition = iconString.toLowerCase();
      if (condition.includes('cloud')) {
        setIcon(cloud);
      } else if (condition.includes('rain')) {
        setIcon(rain);
      } else if (condition.includes('clear')) {
        setIcon(sun);
      } else if (condition.includes('thunder')) {
        setIcon(storm);
      } else if (condition.includes('fog')) {
        setIcon(fog);
      } else if (condition.includes('snow')) {
        setIcon(snow);
      } else if (condition.includes('wind')) {
        setIcon(wind);
      } else {
        setIcon(sun); // Fallback to default if no matching icon is found
      }
    }
  }, [iconString]);

  const formatTime = (time) => {
    return new Date(time).toLocaleString('en-US', {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className='mini-card glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>{formatTime(time)}</p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="weather icon" className='weather-icon w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;{isCelsius ? 'C' : 'F'}</p>
    </div>
  );
};

MiniCard.propTypes = {
  time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  iconString: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default MiniCard;
