import React from "react";

const WeatherLabel = (props:any) => {
    return (
        <div className="weatherLabelContainer">
            <h1>
                {props.city}
            </h1>

            <h3>
                {props.countryFull}
            </h3>

            <p>
                {props.weatherType}, {props.weatherTemp}ºС ({props.weatherTemp * 1.8 +32}ºF)
            </p>
        </div>
    )
}

export default WeatherLabel;