# WeatherApp

## Description

WeatherApp is a simple React application that fetches and displays weather information for various cities. Users can search for weather details either by city name or by ZIP code with the country code. Additionally, it offers a dark mode toggle for a better user experience.

## Features

- Display weather information for up to four cities.
- Search for weather details by city name.
- Search for weather details by ZIP code and country code.
- Toggle between light and dark mode for better readability.

## Technologies Used

- React
- Axios for API requests
- OpenWeatherMap API for weather data
- CSS for styling

## Installation

1. **Clone the repository:**
    git clone https://github.com/yourusername/weatherapp.git
    cd weatherapp
    

2. **Install dependencies:**
    npm install
    

3. **Run the application:**
    npm start
 
4. **Compare Weather:**
    You can compare the weather reports of up to four different cities simultaneously. Simply search for multiple cities by repeating the steps for searching by city name or ZIP code. The weather information for each city will be displayed, allowing you to make comparisons easily.   ```

## Code Structure

### `WeatherApp` Component

This is the main component of the application.

- **State Variables:**
  - `city`: Stores the name of the city entered by the user.
  - `cities`: An array of city names for which weather details are displayed.
  - `data`: An array to hold weather data fetched from the API.
  - `zip`: Stores the ZIP code entered by the user.
  - `isDarkMode`: A boolean to toggle between light and dark modes.

- **Event Handlers:**
  - `handleInput`: Updates the `city` state when the user types a city name.
  - `handleInput1`: Updates the `zip` state when the user types a ZIP code.
  - `handleSearch`: Fetches weather data for the city entered by the user.
  - `handleSearch1`: Fetches weather data for the ZIP code entered by the user.
  - `toggleTheme`: Toggles between light and dark mode.

- **Side Effects:**
  - `useEffect` to fetch weather data when the component mounts or `cities` state changes.
  - `useEffect` to apply the dark mode class to the `body` element when `isDarkMode` changes.

### `Weather` Component

This component displays the weather information for a single city.

- **Props:**
  - `result`: The weather data for a city.

- **Weather Data Displayed:**
  - City name
  - Feels like temperature in Celsius
  - Current date and time adjusted for the city's timezone
  - Humidity percentage
  - Wind speed in meters per second

## API Integration

WeatherApp uses the OpenWeatherMap API to fetch weather data.

- **Fetching Weather by City Name:**
  - API endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - Query parameters: `q` (city name), `APPID` (API key)

- **Fetching Weather by ZIP Code:**
  - API endpoint: `https://api.openweathermap.org/data/2.5/forecast`
  - Query parameters: `zip` (ZIP code and country code), `appid` (API key)

## CSS Styling

### `App.css`

This file contains the styles for the entire application, including light and dark mode styles.

- **Variables:**
  - CSS variables for colors, background, text, etc., for both light and dark modes.

- **Classes:**
  - `.app-container`: Styles for the main container.
  - `.theme-toggle-container`: Styles for the dark mode toggle button container.
  - `.theme-toggle`: Styles for the dark mode toggle button.
  - `.country-input`, `.zip-input`: Styles for the input fields.
  - `.search-button`: Styles for the search buttons.
  - `.weather-cart`: Styles for the weather information container.

### `weather.css`

This file contains styles specific to the `Weather` component.

- **Classes:**
  - `.city-cart`: Styles for the list displaying weather information.

## Usage

1. **Search by City Name:**
   - Enter the city name in the input field.
   - Click the `Search` button.
   - The weather information for the city will be displayed if it is not already in the list.

2. **Search by ZIP Code:**
   - Enter the ZIP code and country code in the format `ZIP,COUNTRY_CODE` (e.g., `560103,IN`).
   - Click the `Search` button.
   - The weather information for the city corresponding to the ZIP code will be displayed if it is not already in the list.

3. **Toggle Dark Mode:**
   - Click the `Toggle Dark Mode` button to switch between light and dark modes.
