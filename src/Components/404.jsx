import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">404</h1>
      <p className="text-sm md:text-2xl text-white mt-4 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      <Link
        to="/"
        aria-label="Go back to home page"
        className="mt-6 bg-blue-500 text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
