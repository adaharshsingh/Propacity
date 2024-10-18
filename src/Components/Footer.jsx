import React from "react";

const Footer = () => {
  return (
    <div className="bg-black opacity-80 text-white py-8 px-5">
      <h1 className="text-green-500 text-center mt-2 text-xl font-bold">
        Propacity - Your Weather Companion!
      </h1>
      <div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-6 font-bold">About Propacity</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Our Mission">
            Our Mission
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Weather Insights">
            Weather Insights
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="User Testimonials">
            User Testimonials
          </a>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-6 font-bold">Features</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Current Weather">
            Current Weather
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="6-Day Forecast">
            6-Day Forecast
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Weather Alerts">
            Weather Alerts
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="City Search">
            City Search
          </a>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-6 font-bold">Get in Touch</h2>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Support">
            Support
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Feedback">
            Feedback
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="FAQs">
            FAQs
          </a>
          <a href="#" className="text-lg mb-4 hover:text-green-500" aria-label="Careers">
            Careers
          </a>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-6 font-bold">Follow Us</h2>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 hover:text-green-500"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 hover:text-green-500"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram mr-2"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 hover:text-green-500"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter mr-2"></i> Twitter
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 hover:text-green-500"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube mr-2"></i> YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
