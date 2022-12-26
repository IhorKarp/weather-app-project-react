import './App.css';
import WeatherForecast from "./WeatherForecast";
import WeatherPanel from "./WeatherPanel";
import React from "react";
import github from "./github.png";


function App() {
  return (
    <div className="App">
       <div className="general mt-5">
        <div className="container main mt-2 border border-3 border-dark rounded-3">
          <WeatherPanel temperature={10} />
          <WeatherForecast />
        </div>
        <footer className="mt-3">
          <p className="text-center">
            <a
              href="https://github.com/IhorKarp/weather-app-project-react"
              target="_blank"
              className="open-source text-decoration-none text-dark"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github-icon" width={30} />
            </a>{" "}
            coded by Me
          </p>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
