import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "ebb7065a0154ed3a021787dae9cf5fe1";

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeather = async() => {
    try{
      let data = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    let response = await data.json();
    console.log(response);
    let result = {
      name: response.name,
      temp: response.main.temp,
      tempMin: response.main.temp_min,
      tempMax: response.main.temp_max,
      humidity: response.main.humidity,
      feelsLike: response.main.feels_like,
      weather: response.weather[0].description
    }
    console.log(result);
    return result;
    }catch(err){
      throw err;
    }

  }
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeather();
      updateInfo(newinfo)
    }catch(err){
      setError(true);
    }

  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" endIcon={<SearchIcon />} type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist</p>}
      </form>
    </div>
  );
}
