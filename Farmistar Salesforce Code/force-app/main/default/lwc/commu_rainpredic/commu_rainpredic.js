import { LightningElement, track } from 'lwc';
import WatsonMLPrediction_Rain from '@salesforce/apex/WatsonMLPrediction_Rain.requestPrediction';

const API_KEY = '7d4f95f1b7d59702e88c1c73a5f5be39'; // Replace with your OpenWeatherMap API key

export default class Commu_rainpredic extends LightningElement {
    @track CITY =CITY_NAME;
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
    @track rainPredictionMessage = 'Checking from OpenWeather & IBM ML model...';
    @track rainPredictionClass = 'rain-predicted';
    @track isSpinner=false;
    @track error = null;
    @track latitude;
    @track longitude;

    connectedCallback() {
        this.isSpinner = true
        this.getLocation();
    }



    async fetchRainPrediction() {
        var user_input = '{"input_data": [{"fields": ["datetime_utc"," _conds"," _dewptm"," _fog"," _hail"," _heatindexm"," _hum"," _precipm"," _pressurem"," _snow"," _tempm"," _thunder"," _tornado"," _vism"," _wdird"," _wdire"," _wgustm"," _windchillm"," _wspdm"], "values": [[null,"'+this.weatherType+'",27,0,0,null,'+this.humidity+',null,'+this.pressure+',0,'+this.temperature+',0,0,2,'+this.windSpeed+',"East",null,null,null]]}]}';
        console.log(user_input)
        WatsonMLPrediction_Rain({ payload: user_input }).then((result) => {
            console.log(JSON.parse(result))
            var rain = JSON.parse(result).predictions[0].values[0][0];
            if (rain == 0) {
                this.rainPredictionMessage = 'No rain is expected today according to past prediction.';
                this.rainPredictionClass = 'no-rain-predicted';
            }else{
                this.rainPredictionMessage = 'According to prediction there is a chance of raining';
                this.rainPredictionClass = 'rain-predicted';
            }
            console.log(result)
            // this.predictionResult = JSON.parse(result).predictions[0].values[0]
            this.isSpinner = false
        }).catch((err) => {
            this.rainPredictionMessage = 'There is some issue with the connection ! Please Contact FARMISTAR Support';
            this.rainPredictionClass = 'rain-predicted';
            this.isSpinner = false
        });

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
                console.log(data);
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
                this.fetchRainPrediction();

            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }

}