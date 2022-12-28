import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <div className="container all-weather bg-transparent">
            <div className="row">
              <div className="col-8 left-panel">
                <h1 id="name" className="name m-0 text-capitalize">{props.data.city}</h1>
                <p className="quote m-0 fw-semibold fst-italic">
                  Cats are really cute...
                </p>
                <div className="temp-line">
                  <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <ul className="weather-descriptionn fw-semibold">
                  <li className="text-capitalize fs-5">{props.data.description}</li>
                  <li><span className="fs-5">wind:</span> {Math.round(props.data.wind)} mph</li>
                  <li><span className="fs-5">humidity:</span> {props.data.humidity} %</li>
                </ul>
              </div>
              <div className="col-4 right-panel">
                  <p className="fw-bolder fs-6 text-end mt-1"><FormattedDate date={props.data.date}/></p>
                  <div className="pt-1">
                  <WeatherIcon code={props.data.icon} alt={props.data.description} size={105} />
                  </div>
              </div>
            </div>
          </div>
          </div>
    )
}