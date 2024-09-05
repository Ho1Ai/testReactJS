import React from "react";

const staticWeatherStatus = {
    temperature: 25,
    city: 'Minsk',
    country: 'BY',
    status: 'sun'
}

const WeatherCard = (props:any) => {
    return (
        <div className="weatherCard">
            <img src="" alt={staticWeatherStatus.status} className="weatherStatusImg"/>

            <div className="weatherCardContainer">
                <h1>{staticWeatherStatus.temperature} ºС</h1>
                <p>{staticWeatherStatus.city}, {staticWeatherStatus.country}</p>
            </div>
        </div>
    )
}

export default WeatherCard;