import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import Weather from "./cityweather";
import './App.css';


function WeatherApp() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState(["New York", "London", "Delhi", "Bangalore"]);
  const [data, setData] = useState([]);
  const [zip, setZip] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInput = (event) => {
      const city_name = event.target.value;
      setCity(city_name.toLowerCase());
        
  };

  const handleInput1 = (event) => {
    console.log("entering", event.target.value);
    setZip(event.target.value);
  };

  const fetchWeatherDetails = useCallback(async (cities) => {
    try {
      const results = [];
    for (let i = 0; i < cities.length; i++) {
      const location = cities[i];
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=81229ad2597db12ef05dc3a32068ea85`;
      const response = await axios.get(url);
      results.push(response.data);
    }
    setData(results);
    console.log("data from the backend...", results)
    }

    catch(err) {
      if(err.response.data.cod === '429') {
        alert("exceeding of requests limitation of your subscription type")
      }
      else {
        alert("error in the fetchweatherdetails")
      }
    }
  },[]);

  const handleSearch = async () => {
    console.log("city ", city);
    if (city !== "") {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6a90693b0704b382e99ab694a6e81971`;
        const response = await axios.get(url);
        const resultCity = response.data.name.toLowerCase(); // Use the name returned by API

        if (!cities.includes(resultCity)) {
          const newCities = [resultCity, ...cities.slice(0, 3)];
          setCities(newCities);
          setCity("");
        } else {
          alert(`The ${resultCity}'s weather is already displayed.`);
          setCity("");
          
        }
      } catch(err) {
        if(err.response.data.cod === '429') {
          alert("exceeding of requests limitation of your subscription type")
        }
        else {
          alert("City not found. Please enter a valid city name.");
        setCity("");
        }
        

      }

    } else {
      alert("Type a valid input in the searchbar");
    }

  };
  

  const handleSearch1 = useCallback(async () => {
    try {
      if (zip.trim() !== "") {
        const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=6a90693b0704b382e99ab694a6e81971`;
        const results = await axios.get(url);

        if (results.data.cod === '200') {
          const resultCity = results.data.city.name.toLowerCase();
          if (!cities.includes(resultCity)) {
            const newCities = [resultCity, ...cities.slice(0, 3)];
            setCities(newCities);
            /*fetchWeatherDetails(newCities);*/
          } else {
            alert(`The ${resultCity}'s weather is already displayed.`);
          }
          setZip("");
        }

        
        }

      else {
        alert("Type valid input in the searchbar")
      }
    } catch(err) {
      alert("City not found, Please enter valid value in the format zipcode,country_code");
    }
  }, [zip, cities]);

  useEffect(() => {
    fetchWeatherDetails(cities);
  }, [cities, fetchWeatherDetails]);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app-container">
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="search-section">
      <input type="text" value={city} onChange={handleInput} placeholder="City Name (eg : mumbai)" className="country-input"/>
      <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <span>OR</span>

      <div className="search-section">
      <input type="text" value={zip} onChange={handleInput1} placeholder="Zip Code, Country Code (eg:560103,IN)" className="zip-input"/>
      <button onClick={handleSearch1} className="search-button">Search</button>
      </div>

      <div className="weather-cart">
        {data.map((each) => (<Weather key={each.id} result={each} />))}
      </div>
    </div>
  );
}

export default WeatherApp;