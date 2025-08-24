let weatherData; // Variable to store weather data

// Function to fetch weather data from an API
const fetchWeatherData = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        weatherData = await response.json();
        displayWeatherData();
    } catch (error) {
        console.error(error);
        alert('Error fetching weather data. Please try again.');
    }
};

// Function to display weather data on the webpage
const displayWeatherData = () => {
    const weatherContainer = documentementById('weather-container');
    weatherContainer.innerHTML =${weatherData.name}, ${weatherData.sys.country}
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Weathe: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind 