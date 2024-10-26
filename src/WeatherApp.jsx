import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    name: "Delhi",
    feelsLike: 23.32,
    humidity: 25,
    temp: 23.05,
    tempMax: 23.05,
    tempMin:23.05,
    weather:"haze"
  })
  let updateInfo = (result) => {
    setWeatherInfo(result);
  }
  return(
    <div>
    <SearchBox updateInfo= {updateInfo}/>
    <InfoBox info={weatherInfo}/>
    <p>Weather App By Sophia</p>
    </div>

  )
}