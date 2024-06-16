/*
import './cityweather.css';
function Weather(props) {
    const {result} = props
    const feelsLikeCelsius = result.main.feels_like - 273.15;
    const currentDateTime = new Date((result.dt + result.timezone)*1000).toLocaleString()
    return(
        <ul className="city-cart">
            <li>{result.name}</li>
            <li>{feelsLikeCelsius.toFixed(2)} °C</li>
            <li>{currentDateTime}</li>
            <li>Humidity : {result.main.humidity}%</li>
            <li>Wind Speed: {result.wind.speed} m/s</li>
            

        </ul>
    )
}

export default Weather
*/
import './cityweather.css';

function Weather(props) {
    const { result } = props;

    // Convert temperature from Kelvin to Celsius
    const feelsLikeCelsius = result.main.feels_like - 273.15;

    // Calculate UTC time in milliseconds
    const utcMilliseconds = result.dt * 1000;

    // Calculate local time in milliseconds
    const localMilliseconds = utcMilliseconds + (result.timezone * 1000);

    // Create a new Date object with the local time
    const localDate = new Date(localMilliseconds);

    // Format the local time using Intl.DateTimeFormat
    const options = { 
        timeZone: 'UTC', 
        hour: 'numeric', 
        minute: 'numeric', 
        /*second: 'numeric', */
        hour12: true 
    };
    const localTime = new Intl.DateTimeFormat('en-US', options).format(localDate);

    return (
        <ul className="city-cart">
            <li>{result.name}</li>
            <li>{feelsLikeCelsius.toFixed(2)} °C</li>
            <li>Local Time: {localTime}</li>
            <li>Humidity: {result.main.humidity}%</li>
            <li>Wind Speed: {result.wind.speed} m/s</li>
        </ul>
    );
}

export default Weather;