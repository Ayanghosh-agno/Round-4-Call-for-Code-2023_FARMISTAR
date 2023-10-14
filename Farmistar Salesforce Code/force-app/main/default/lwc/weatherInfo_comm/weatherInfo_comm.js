// weatherInfo.js
import { LightningElement, track } from 'lwc';

const API_KEY = '7d4f95f1b7d59702e88c1c73a5f5be39'; // Replace with your OpenWeatherMap API key

export default class WeatherInfo_comm extends LightningElement {
    @track city;
    @track country;
    @track temperature = '';
    @track temperatureMin = '';
    @track temperatureMax = '';
    @track weatherType = '';
    @track pressure = '';
    @track feelsLike = '';
    @track humidity = '';
    @track windSpeed = '';
    @track sunriseTime = '';
    @track sunsetTime = '';
    @track latitude;
    @track longitude;
    @track error = null;
    @track isSpinner = false;
    get title() {
        return this.error == null ? this.country == undefined ? 'Weather Information is being fetched... !' : 'Weather Information of ' + this.city + ', ' + this.country : 'Error in fetching Geo Location';
    }

    connectedCallback() {
        this.isSpinner = true;
        this.getLocation();
    }

    getLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.fetchWeatherData();
                    this.error = null;
                },
                (error) => {
                    this.latitude = null;
                    this.longitude = null;
                    this.error = error.message;
                    this.isSpinner = false
                }
            );
        } else {
            this.error = 'Geolocation is not supported by your browser.';
        }
    }

    // Method to fetch weather data from OpenWeatherMap API
    fetchWeatherData() {
        // Construct the API URL
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${API_KEY}&units=metric`;

        // Make the API request using the fetch function
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                this.city = data.name;
                this.country = data.sys.country;
                // Extract and assign weather data
                this.temperature = data.main.temp;
                this.temperatureMin = data.main.temp_min;
                this.temperatureMax = data.main.temp_max;
                this.weatherType = data.weather[0].description;
                this.pressure = data.main.pressure;
                this.feelsLike = data.main.feels_like;
                this.humidity = data.main.humidity;
                this.windSpeed = data.wind.speed;
                // Convert sunrise and sunset timestamps to readable time format
                this.sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                this.sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
                this.isSpinner = false
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }
}