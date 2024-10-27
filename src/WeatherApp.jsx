import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    name: "---",
    feelsLike: "",
    humidity: "",
    temp: "",
    tempMax: "",
    tempMin:"",
    weather:""
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