import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {

  let [loaded , setLoaded] = useState(false);
  let [forecast , setForecast] = useState(null);

  useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  function load(){
    let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
  }

  
  if(loaded){
    console.log(forecast);
    return (
      <div className=" WeatherForecast container bg-transparent">
          <div className="row">
            <div className="col-4">
              <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col-4">
              <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col-4">
              <WeatherForecastDay data={forecast[3]} />
            </div>

          </div>
        </div>
    );

  } else {
    load()

    return null;
  }
}

