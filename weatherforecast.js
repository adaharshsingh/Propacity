// Sample data for daily weather and 5-day forecast
const dailyWeather = {
    temperature: "75°F",
    condition: "Sunny",
};

const fiveDayForecast = [
    { day: "Monday", temperature: "70°F", condition: "Cloudy" },
    { day: "Tuesday", temperature: "72°F", condition: "Rainy" },
    { day: "Wednesday", temperature: "68°F", condition: "Sunny" },
    { day: "Thursday", temperature: "74°F", condition: "Partly Cloudy" },
    { day: "Friday", temperature: "78°F", condition: "Sunny" },
];

// Function to render daily weather
function renderDailyWeather() {
    const dailyWeatherCard = document.getElementById("daily-weather");
    dailyWeatherCard.innerHTML = `
        <h3>${dailyWeather.condition}</h3>
        <p>Temperature: ${dailyWeather.temperature}</p>
    `;
}

// Function to render 5-day forecast
function renderFiveDayForecast() {
    const fiveDayForecastContainer = document.getElementById("five-day-forecast");
    fiveDayForecast.forEach((day) => {
        const forecastCard = document.createElement("div");
        forecastCard.classList.add("weather-card");
        forecastCard.innerHTML = `
            <h4>${day.day}</h4>
            <p>Temperature: ${day.temperature}</p>
            <p>Condition: ${day.condition}</p>
        `;
        fiveDayForecastContainer.appendChild(forecastCard);
    });
}

// Initialize the weather data
function init() {
    renderDailyWeather();
    renderFiveDayForecast();
}

// Call the init function to load data
init();
