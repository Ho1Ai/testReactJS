import React, {useEffect, useState} from "react";
import WeatherCard from "../tsxContainer/weatherCard";
import WeatherLabel from "../tsxContainer/weatherLabel";
import axios from "axios";

class WeatherStatus {
    placeCity: string;
    placeCountryFull: string;
    placeCountryShortcut: string;
    weatherStatus:string;
    weatherTemperature: number;
    constructor(city: string = "Minsk", countryFull:string ="Belarus", countryShortcut: string = "BY", weatherStatus = "Sunny", weatherTemperature = 25) {
        this.placeCity = city;
        this.placeCountryFull = countryFull
        this.placeCountryShortcut = countryShortcut;
        this.weatherStatus = weatherStatus;
        this.weatherTemperature = weatherTemperature;
    }
}

const MainPage = () => {
    const weatherStatus = new WeatherStatus();

    let [currentCoord, setCurrentCoord] = useState([53.27, 27.53]); //order: current latitude, current longitude

    let [current, setCurrent] = useState() //current от currently used location

    useEffect(()=>{
        fetch(
            `https://api.api-ninjas.com/v1/geocoding?city=London&country=England`, {
                headers: {
                    'X-Api-Key': '9pZnOwLsaFyFFp1jf4b6sA==LmmOljKjz5npdonP'
                }
            }
        ).then((responsedData:any)=>{
            console.log(responsedData)
        //     (response:any) =>{
        //         return response.json
        //     }
        // ).then(
        //     (data)=>{
        //         console.log(data)
        })
    },[current])

    useEffect(()=>{
        let newFetchResponse:any; 
        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m`
        ).then((response:any) => {
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
        }, [currentCoord])

    return (
        <>
            <div className="mainPageAligner">
                <div className="mainPageContainer">
                    
                    <div className="askRow">

                    </div>

                    <div className="resultRow">
                        <WeatherCard/>

                        <WeatherLabel 
                        city = {weatherStatus.placeCity} 
                        countryFull={weatherStatus.placeCountryFull} 
                        weatherType={weatherStatus.weatherStatus} 
                        weatherTemp = {weatherStatus.weatherTemperature}
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MainPage