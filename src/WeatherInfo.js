import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <div className="container all-weather bg-transparent">
            <div className="row">
              <div className="col-9 left-panel">
                <h1 className="name m-0 text-capitalize">{props.data.city}</h1>
                <p className="quote m-0 fw-semibold fst-italic">
                  Cats are really cute...
                </p>
                <div className="temp-line">
                  <WeatherTemperature celsius={props.data.temperature}/>
                  <WeatherIcon code={props.data.icon} alt={props.data.description} size={40} />
                </div>
                <ul className="weather-descriptionn fw-semibold">
                  <li className="text-capitalize">{props.data.description}</li>
                  <li>wind:  {Math.round(props.data.wind)}mph</li>
                  <li>humidity: {props.data.humidity}%</li>
                </ul>
              </div>
              <div className="col-3 right-panel">
                  <p className="fw-bolder fs-5"><FormattedDate date={props.data.date}/></p>
              </div>
            </div>
          </div>
          </div>
    )
}