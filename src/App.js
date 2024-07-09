import { useState } from "react";
import "./App.css";
import Search from "./component/Search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearch = (searchData) => {
    // Fetch current weather
    fetch(
      `${WEATHER_API_URL}/weather?q=${searchData}&units=metric&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((weatherResponse) => {
        console.log(weatherResponse);
        const {
          coord: { lat, lon },
        } = weatherResponse;

        return fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((forecastResponse) => forecastResponse.json())
          .then((forecastResponse) => {
            // Update state with both current weather and forecast data
            setCurrentWeather({ city: searchData, ...weatherResponse });
            setForecast({ city: searchData, ...forecastResponse });
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit">
      <Search onSearch={handleOnSearch} />
    </div>
  );
}

export default App;
