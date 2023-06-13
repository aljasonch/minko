import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tangerang&appid=c259999a19314480ac0ee16601f98e1b`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className="m-4 flex justify-center opacity-50">
      {weather && (
        <ul>
          <li>
            <strong>{weather.name}</strong>
          </li>
          <li>
            <strong style={{ display: "block", textAlign: "center" }}>
              {kelvinToCelsius(weather.main.temp).toFixed(2)}°C
            </strong>
          </li>
        </ul>
      )}
    </div>
  );
};

export default WeatherComponent;
