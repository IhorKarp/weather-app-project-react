import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";
import cat from "./images/cat.png";
import pin from "./images/pin.gif";

export default function Weather(props) {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
 
  function search() {
    let apiKey = "6752bdf11225f140962e52e40e640b15";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  } 

  function localSearch(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = `aa27af19e16f8ee065d7861dff9b21a6`;
    let units = `metric`;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrlLocal = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrlLocal).then(handleResponse);
  }

  function currentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(localSearch);
  }
  
  if(weatherData.ready){
    return (
      <div className="Weather">
        <div className="container search">
          <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-4 p-0 ">
                  <img className="icon" src={cat} alt="icon" width={108} />
                </div>
                <div className="col-4 align-self-end pe-1 ">
                  <input
                  id="input-form"
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    autoComplete={false}
                    onChange={updateCity}
                  />
                </div>
                <div className="col-2 align-self-end p-0 ps-1">
                  <input id="submit-form" type="submit" className="form-control go" value="GO" />
                </div>
                <div className="col-2 align-self-end ps-0">
                  <button className="geolocation bg-transparent border-0">
                    <img
                      className="geolocationLogo"
                      src={pin}
                      alt="pin"
                      width={70}
                      onClick={currentLocation}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        <div className=" Weather-panel mt-2 border border-3 border-dark rounded-4">
          <WeatherInfo data={weatherData} />
          <div className="my-4">
          <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
        </div>
        </div>
      );
  } else{
    search();
    return 'Loading'
  }
  
}
