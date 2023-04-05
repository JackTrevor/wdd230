
function updateCurrentDate() {
    const currentDateElement = document.querySelector('.current-date');
    const currentDate = new Date();
    const dateString = `${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    currentDateElement.textContent = `${dateString}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
  });
  
  async function fetchWeatherData(location) {
    const apiKey = '368e9e1238c8da59cb34c719a5716e00';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
  
    if (response.ok) {
      const weatherData = await response.json();
      displayWeatherData(weatherData);
    } else {
      alert('Error fetching weather data');
    }
  }
  
  function displayWeatherData(weatherData) {
   
    const tempElement = document.querySelector('.weather-card p:nth-child(1)');
    tempElement.textContent = `Current Temperature: ${weatherData.main.temp.toFixed(1)}°C`;
  
    
    const conditionElement = document.querySelector('.weather-card p:nth-child(2)');
    conditionElement.textContent = `Condition Description: ${weatherData.weather[0].description}`;
  
    
    const humidityElement = document.querySelector('.weather-card p:nth-child(3)');
    humidityElement.textContent = `Humidity: ${weatherData.main.humidity}%`;
  }
  
  
  async function fetchForecastData(location) {
    const apiKey = '368e9e1238c8da59cb34c719a5716e00';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=24&appid=${apiKey}`;
    const response = await fetch(url);
  
    if (response.ok) {
      const forecastData = await response.json();
      displayForecastData(forecastData);
    } else {
      alert('Error fetching forecast data');
    }
  }
  
  function displayForecastData(forecastData) {
    const forecastList = forecastData.list;
    const dailyForecast = [];
  
    for (let i = 0; i < forecastList.length; i += 8) {
      dailyForecast.push({
        day: new Date(forecastList[i].dt_txt).toLocaleDateString('en-us', { weekday: 'long' }),
        temp: forecastList[i].main.temp.toFixed(1),
      });
    }
  
    const forecastElement = document.querySelector('.forecast ul');
    dailyForecast.forEach((item, index) => {
      forecastElement.children[index].textContent = `${item.day}: ${item.temp}°C`;
    });
  }
  
 
  
  document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    fetchWeatherData('Carlsbad,US');
    fetchForecastData('Carlsbad,US');
  });
  