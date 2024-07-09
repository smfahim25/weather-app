import React from "react";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div>
      <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-5 px-10 mt-10">
        {data.list.slice(0, 7).map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5">
            <div className="text-center">
              <label className="font-semibold text-lg dark:text-gray-200">
                {forecastDays[idx]}
              </label>
              <img
                alt="weather"
                className="w-1/3 mx-auto"
                src={`icons/${item.weather[0].icon}.png`}
              />

              <div className="font-semibold">{item.weather[0].description}</div>

              <label className="text-lg text-gray-500 dark:text-gray-300">
                {Math.round(item.main.temp_max)}°C /{" "}
                {Math.round(item.main.temp_min)}°C{" "}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
