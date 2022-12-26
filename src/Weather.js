import React, { useState } from "react";
import "./Weather.css";
import cat from "./images/cat.png";
import pin from "./images/pin.gif";
import axios from "axios";

export default function WeatherPanel(props) {
const[weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
        ready:true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
    });
    console.log(response);
  }

  function search() {
    let apiKey = "6752bdf11225f140962e52e40e640b15";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if(weatherData.ready){
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
                <h1 className="name m-0 text-capitalize">{weatherData.city}</h1>
                <p className="quote m-0 fw-semibold fst-italic">
                  Cats are really cute...
                </p>
                <div className="temp-line">
                  <span>
                    <span id="temp" className="temp">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="temp-links">
                      <a
                        href="/"
                        id="celsius-link"
                        className="text-decoration-none fs-5"
                        
                      >
                        {" "}
                        C{" "}
                      </a>
                      <span className="fs-5">|</span>
                      <a
                        href="/"
                        id="fahrenheit-link"
                        className="text-decoration-none fs-5"
                      
                      >
                        {" "}
                        F{" "}
                      </a>
                    </span>
                  </span>
                  <img className="ms-1" src={weatherData.icon} width={72} alt="weather logo" />
                </div>
                <ul className="weather-descriptionn fw-semibold">
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>wind:  {Math.round(weatherData.wind)}mph</li>
                  <li>humidity: {weatherData.humidity}%</li>
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
  } else{
    search();
    return 'Loading'
  }
  
}
