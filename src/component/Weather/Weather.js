import React from "react";
import style from "./Weather.module.css";

const Weather = ({ data }) => {
  return (
    <div>
      <div className={style.weather}>
        <div className={style.top}>
          <div>
            <p className={style.city}>{data.city}</p>
            <p className={style.weatherDescription}>
              {data.weather[0].description}
            </p>
          </div>
          <img
            alt="weather"
            className={style.weatherIcon}
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className={style.bot}>
          <p className={style.temperature}>{Math.round(data.main.temp)}°C</p>
          <div className={style.details}>
            <div className={style.parameterRow}>
              <span className={style.parameterLabel}>Feels like</span>
              <span className={style.parameterValue}>
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className={style.parameterRow}>
              <span className={style.parameterLabel}>Wind</span>
              <span className={style.parameterValue}>
                {data.wind.speed} km/s
              </span>
            </div>
            <div className={style.parameterRow}>
              <span className={style.parameterLabel}>Humidity</span>
              <span className={style.parameterValue}>
                {data.main.humidity}%
              </span>
            </div>
            <div className={style.parameterRow}>
              <span className={style.parameterLabel}>Pressure</span>
              <span className={style.parameterValue}>
                {data.main.pressure} hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
