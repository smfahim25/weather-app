import { useState, useEffect } from "react";
import "./App.css";
import Search from "./component/Search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Weather from "./component/Weather/Weather";
import Loader from "./Shared/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forecast from "./component/Forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const defaultCity = "Dhaka";

  const fetchWeatherData = (city) => {
    setLoading(true);
    fetch(
      `${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((weatherResponse) => {
        const {
          coord: { lat, lon },
        } = weatherResponse;

        return fetch(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((forecastResponse) => forecastResponse.json())
          .then((forecastResponse) => {
            // Update state with both current weather and forecast data
            setCurrentWeather({
              city: weatherResponse.name,
              ...weatherResponse,
            });
            setForecast({ city: weatherResponse.name, ...forecastResponse });
            setLoading(false);
          });
      })
      .catch((err) => {
        setCurrentWeather(null);
        setForecast(null);
        setLoading(false);
        toast.error("City not found! Enter a valid city name.");
      });
  };

  const handleOnSearch = (searchData) => {
    fetchWeatherData(searchData);
  };

  useEffect(() => {
    fetchWeatherData(defaultCity);
  }, []);

  return (
    <div>
      <div>
        <Search onSearch={handleOnSearch} />
        {loading && (
          <div className="mt-10">
            <Loader />
          </div>
        )}
        {currentWeather && !loading && <Weather data={currentWeather} />}
        {forecast && !loading && <Forecast data={forecast} />}
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
