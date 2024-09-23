import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
// Images
import Clear from '../assets/images/Clear.jpg';
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpg';

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <div className="fixed top-0 left-0 h-screen w-full -z-10">
      <img src={image} alt="weather_image" className="h-full w-full object-cover" />
      {/* Keep the translucent box in a fixed position */}
      <div className="absolute top-[calc(50%-0.5cm)] left-1/2 h-3/4 w-3/4 bg-black opacity-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default BackgroundLayout;
