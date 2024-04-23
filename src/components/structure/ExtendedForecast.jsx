import React from 'react';

const ExtendedForecast = ({ filteredForecast }) => {
  return (
    <div className="extended-forecasts-container">
         {/* Forecast items */}
         {filteredForecast.map((data, index) => {
             const date = new Date(data.dt_txt);
             const day= date.toDateString();
            // const day = date.toLocaleDateString("en-US", {
            //   weekday: "short",
            // });
      return (
        <div className="forecast-box" key={index}>
          <h5>{day}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="icon"
          />
          <h5>{data.weather[0].description}</h5>
          <h5 className="min-max-temp">
            {data.main.temp_max}&deg; /{" "}
            {data.main.temp_min}&deg;
          </h5>
        </div>
      );
    })}
  </div>
  );
};

export default ExtendedForecast;