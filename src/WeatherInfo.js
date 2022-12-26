import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
                  <span>
                    <span id="temp" className="temp">
                      {Math.round(props.data.temperature)}
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
                  <WeatherIcon code={props.data.icon} alt={props.data.description} />
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