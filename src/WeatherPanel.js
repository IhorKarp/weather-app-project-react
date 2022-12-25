import React, { useState } from "react";
import "./WeatherPanel.css";
import cloud from "./cloud.gif";
import cat from "./cat.png";
import pin from "./pin.gif";
import axios from "axios";

export default function WeatherPanel(props) {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [post, setPost] = useState(null);
  const [description, setDescription] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    console.log(response);
    setPost(`${response.data.name}`);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    setHumidity(response.data.main.humidity);
  }

  function weather() {
    let apiKey = "6752bdf11225f140962e52e40e640b15";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function celsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  function fahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
  }

  function handleSubmit(event) {
    event.preventDefault();
    weather();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div onSubmit={handleSubmit}>
      <div className="container search bg-transparent">
        <form>
          <div className="row">
            <div className="col-3 p-0 ">
              <img className="icon" src={cat} alt="icon" width={108} />
            </div>
            <div className="col-5 align-self-end pe-1 ">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                autoComplete={false}
                onChange={updateCity}
              />
            </div>
            <div className="col-2 align-self-end p-0 ps-1">
              <input type="submit" className="form-control go" value="GO" />
            </div>
            <div className="col-2 align-self-end ps-0">
              <button className="geolocation bg-transparent border-0">
                <img
                  className="geolocationLogo"
                  src={pin}
                  alt="pin"
                  width={70}
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container all-weather bg-transparent">
        <div className="row">
          <div className="col-9 left-panel">
            <h1 className="name m-0 text-capitalize">{post}</h1>
            <p className="quote m-0 fw-semibold fst-italic">
              Cats are really cute...
            </p>
            <div className="temp-line">
              <span>
                <span id="temp" className="temp">
                  {temperature}
                </span>
                <span className="temp-links">
                  <a
                    href="/"
                    id="celsius-link"
                    className="text-decoration-none fs-5"
                    onClick={celsius}
                  >
                    {" "}
                    C{" "}
                  </a>
                  <span className="fs-5">|</span>
                  <a
                    href="/"
                    id="fahrenheit-link"
                    className="text-decoration-none fs-5"
                    onClick={fahrenheit}
                  >
                    {" "}
                    F{" "}
                  </a>
                </span>
              </span>
              <img className="ms-1" src={cloud} width={72} alt="weather logo" />
            </div>
            <ul className="weather-descriptionn fw-semibold">
              <li className="text-capitalize">{description}</li>
              <li>wind:{wind}mph</li>
              <li>humidity: {humidity}%</li>
            </ul>
          </div>
          <div className="col-3 right-panel">
            <ul>
              <li className="fw-bolder fs-5">Friday</li>
              <li className="fw-semibold">13:43</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
