<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #007BFF;
        }
        code {
            background-color: #e9ecef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #f8f9fa;
            padding: 10px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            overflow-x: auto;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        li {
            margin: 5px 0;
        }
        .installation {
            background-color: #e7f3fe;
            border-left: 6px solid #2196F3;
            padding: 10px;
        }
        .features, .technologies, .acknowledgements {
            margin-top: 20px;
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 5px;
        }
        footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>

    <h1>Weather Forecast Application</h1>
    <p>This project is a weather forecast application built using React.js that fetches and displays weather data from a public API. It emphasizes reusable components, API integration, state management, and a user-friendly interface.</p>

    <div class="features">
        <h2>Features</h2>
        <ul>
            <li><strong>Current Weather Display:</strong> Shows the current weather for a default city (e.g., New York) with components for city name, temperature, weather condition, and an icon.</li>
            <li><strong>City Search Functionality:</strong> Users can search for weather information for different cities using a custom-built input component.</li>
            <li><strong>Five-Day Forecast:</strong> View a detailed 5-day weather forecast, including day of the week, high and low temperatures, and weather icons.</li>
            <li><strong>Temperature Unit Conversion:</strong> Toggle between Celsius and Fahrenheit with manual conversion logic.</li>
            <li><strong>Responsive Design:</strong> The application adapts seamlessly to various screen sizes and orientations.</li>
            <li><strong>Additional Features:</strong>
                <ul>
                    <li>Caching for the last searched city.</li>
                    <li>Pull-to-refresh functionality.</li>
                    <li>Performance optimizations like lazy loading components.</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="installation">
        <h2>Installation</h2>
        <ol>
            <li><strong>Clone the Repository:</strong>
                <pre><code>git clone https://github.com/adaharshsingh/Propacity.git</code></pre>
            </li>
            <li><strong>Navigate to the Project Directory:</strong>
                <pre><code>cd Propacity</code></pre>
            </li>
            <li><strong>Install Dependencies:</strong>
                <pre><code>npm i</code></pre>
            </li>
            <li><strong>Start the Development Server:</strong>
                <pre><code>npm run dev</code></pre>
            </li>
            <li><strong>Create a .env File:</strong>
                <pre><code>VITE_API_KEY=your_api_key_here</code></pre>
                <p>You can obtain the API key from the <a href="https://rapidapi.com/visual-crossing-corporation-visual-crossing-corporation-default/api/visual-crossing-weather">Visual Crossing Weather API</a>.</p>
            </li>
            <li><strong>Open Your Browser:</strong> Go to <code>http://localhost:5173</code> to view the application.</li>
        </ol>
    </div>

    <div class="technologies">
        <h2>Technologies Used</h2>
        <ul>
            <li>React.js</li>
            <li>CSS</li>
            <li>OpenWeatherMap API (or your chosen weather API)</li>
        </ul>
    </div>

    <div class="contributing">
        <h2>Contributing</h2>
        <p>Contributions are welcome! If you'd like to contribute, please submit a pull request or open an issue.</p>
    </div>

    <div class="license">
        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>

    <div class="acknowledgements">
        <h2>Acknowledgements</h2>
        <p>Thanks to OpenWeatherMap for providing the weather data API.</p>
    </div>

    <footer>
        <p>&copy; 2024 Weather Forecast Application. All Rights Reserved.</p>
    </footer>

</body>
</html>
