import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Portland",
    date: "Tuesday, 10:00",
    temperature: 51,
    description: "overcast",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    maxTemp: 63,
    minTemp: 43,
    humidity: 10,
    wind: 15,
  };

  return (
    <div className="container">
      <div className="Weather">
        <div className="row mt-2 mb-2">
          <div className="col-md-12 text-center">
            <form className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search for your city..."
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input type="submit" value="search" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row gx-1 mb-3">
          <div className="col-4 p-2 mr-2 text-center">
            <div className="today">
              <h3>
                <strong>
                  <span>{weatherData.city}</span>
                </strong>
              </h3>
              <h4>
                Last updated at <span>{weatherData.date}</span>
              </h4>
              <h1>{weatherData.temperature}°F</h1>
              <div className="units">
                <a href="\">°F</a> |{" "}
                <a href="\" className="">
                  °C
                </a>
              </div>
              <br />
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="icon"
                />
                <h2>{weatherData.description}</h2>
              </div>
            </div>
          </div>
          <div className="col-4 p-2 mr-2 text-center">
            <div className="today-details">
              <ul>
                <li>
                  High:
                  {weatherData.maxTemp}%
                </li>
                <li>
                  Low:
                  {weatherData.minTemp}%
                </li>
                <li>
                  Humidity:
                  {weatherData.humidity}%
                </li>
                <li>
                  Wind:
                  {weatherData.wind}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
