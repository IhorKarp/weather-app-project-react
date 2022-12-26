import React from "react";
import "./WeatherForecast.css";
import cloud from "./images/cloud.gif";

export default function WeatherForecast() {
  return (
    <div className="container bg-transparent">
      <div className="three-day">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>
                <p className="day fw-bold">Saturday</p>
              </li>
              <li>
                <img id="one" src={cloud} width={72} alt="weather logo" />
              </li>
              <li>
                <p className="small-temp">7°</p>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <p id="day-two" className="day fw-bold">
                  Sunday
                </p>
              </li>
              <li>
                <img id="two" src={cloud} width={72} alt="weather logo" />
              </li>
              <li>
                <p className="small-temp">9°</p>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <p className="day fw-bold">Monday</p>
              </li>
              <li>
                <img id="three" src={cloud} width={72} alt="weather logo" />
              </li>
              <li>
                <p className="small-temp">11°</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
