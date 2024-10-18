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

const weatherImages = {
  clear: Clear,
  cloudy: Cloudy,
  rainy: Rainy,
  snow: Snow,
  fog: Fog,
  storm: Stormy,
  sunny: Sunny,
};

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);
  const [altText, setAltText] = useState("Clear weather");

  useEffect(() => {
    if (weather.conditions) {
      const imageString = weather.conditions.toLowerCase();
      let newImage = Clear;
      let newAltText = "Clear weather";

      if (imageString.includes('clear')) {
        newImage = weatherImages.clear;
        newAltText = "Clear weather";
      } else if (imageString.includes('cloud')) {
        newImage = weatherImages.cloudy;
        newAltText = "Cloudy weather";
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        newImage = weatherImages.rainy;
        newAltText = "Rainy weather";
      } else if (imageString.includes('snow')) {
        newImage = weatherImages.snow;
        newAltText = "Snowy weather";
      } else if (imageString.includes('fog')) {
        newImage = weatherImages.fog;
        newAltText = "Foggy weather";
      } else if (imageString.includes('thunder') || imageString.includes('storm')) {
        newImage = weatherImages.storm;
        newAltText = "Stormy weather";
      } else if (imageString.includes('sunny')) {
        newImage = weatherImages.sunny;
        newAltText = "Sunny weather";
      }

      setImage(newImage);
      setAltText(newAltText);
    }
  }, [weather]);

  return (
    <div className="fixed top-0 left-0 h-screen w-full -z-10">
      <img src={image} alt={altText} className="h-full w-full object-cover" />
      {/* Keep the translucent box in a fixed position */}
      <div className="absolute top-[calc(50%-0.5cm)] left-1/2 h-3/4 w-3/4 bg-black opacity-50 rounded-lg transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default BackgroundLayout;
