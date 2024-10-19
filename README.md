Here's a README file for your weather forecast application:

```markdown
# Weather Forecast Application

## Objective
This project is a weather forecast application built using React.js that fetches and displays weather data from a public API. It emphasizes reusable components, API integration, state management, and a user-friendly interface.

## Features
- **Current Weather Display**: Shows the current weather for a default city (e.g., New York) with components for city name, temperature, weather condition, and an icon.
  
- **City Search Functionality**: Users can search for weather information for different cities using a custom-built input component, allowing for efficient and intuitive city lookup.

- **Five-Day Forecast**: Below the current weather, users can view a detailed 5-day weather forecast, including:
  - Day of the week
  - High and low temperatures
  - Weather icons for each day
  
- **Temperature Unit Conversion**: Users can toggle between Celsius and Fahrenheit, with manual conversion logic implemented to ensure accurate temperature displays.

- **Responsive Design**: The application is styled to be visually appealing and responsive, adapting seamlessly to various screen sizes and orientations.

- **Additional Features**:
  - Caching for the last searched city to enable offline viewing.
  - Pull-to-refresh functionality for updating weather data.
  - Performance optimizations like lazy loading components and optimizing API calls.

## Installation
To set up the Weather Forecast Application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adaharshsingh/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create a .env File**:
   Create a file named `.env` in the root directory and add your API key:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```
   You can obtain the API key from the [OpenWeatherMap API](https://openweathermap.org/api).

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Open Your Browser**:
   Go to [http://localhost:3000](http://localhost:3000) to view the application.   

## Technologies Used
- **React.js**
- **Axios**
- **OpenWeatherMap API**

## Contributing
Contributions are welcome! If you'd like to contribute, please submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Acknowledgements
Thanks to OpenWeatherMap for providing the weather data API.
```

Feel free to customize any sections or add additional information that might be relevant for users or contributors!
