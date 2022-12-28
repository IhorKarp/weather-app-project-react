import React , {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

	function convertToFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function convertToCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

    if (unit === "celsius") {
		return (
			<div className="WeatherTemperature text-center">
				<span id="temp" className="temp me-3">{Math.round(props.celsius)}</span>
				<span className="temp-links">
					°C 
                    <span className="fs-5">|</span>
					<span>
						<a 
                        href="/" 
                        id="fahrenheit-link"
                        className="text-decoration-none fs-5 text-dark"
                        onClick={convertToFahrenheit}>
							°F
						</a>{" "}
					</span>
				</span>
			</div>
		);
	} else {
		let fahrenheit = (props.celsius * 9) / 5 + 32;
		return (
			<div className="WeatherTemperature text-center">
				<span id="temp" className="temp me-3">{Math.round(fahrenheit)}</span>
				<span className="temp-links">
					<span>
						{" "}
						<a 
                        href="/" 
                        id="celsius-link"
                        className="text-decoration-none fs-5 text-dark"
                         onClick={convertToCelsius}>
							°C
						</a>{" "}
					</span>
					<span className="fs-5 ">|</span>
                    °F
				</span>
			</div>
		);
	}
}