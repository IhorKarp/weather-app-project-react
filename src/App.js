import './App.css';
import Weather from "./Weather";
import React from "react";
import github from "./images/github.png";


function App() {
  return (
    <div className="App">
       <div className="general mt-5">
        <div className="container main mt-2 bg-transparent">
          <Weather defaultCity="New York"/>
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
