import React from "react";

const Footer = () => {
  return (
    <div className="bg-black opacity-80 text-white py-8 px-5">
      <h1 className="text-green-500 text-center mt-2 text-xl font-bold">
        Propacity - Your Weather Companion!
      </h1>
      <div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col text-left">
          <h2 className="text-2xl mb-6 font-bold">About Propacity</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Our Mission
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Weather Insights
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            User Testimonials
          </a>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="text-2xl mb-6 font-bold">Features</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Current Weather
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            6-Day Forecast
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Weather Alerts
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            City Search
          </a>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="text-2xl mb-6 font-bold">Get in Touch</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Support
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Feedback
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            FAQs
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500">
            Careers
          </a>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="text-2xl mb-6 font-bold">Follow Us</h2>
          <a href="#" className="flex items-center mb-4 hover:text-green-500">
            <i className="fab fa-facebook-f mr-2"></i>
            Facebook
          </a>
          <a href="#" className="flex items-center mb-4 hover:text-green-500">
            <i className="fab fa-instagram mr-2"></i>
            Instagram
          </a>
          <a href="#" className="flex items-center mb-4 hover:text-green-500">
            <i className="fab fa-twitter mr-2"></i>
            Twitter
          </a>
          <a href="#" className="flex items-center mb-4 hover:text-green-500">
            <i className="fab fa-youtube mr-2"></i>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
