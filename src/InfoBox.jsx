import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const firstImg =
    "https://images.unsplash.com/photo-1698213120340-3fd8fca285ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hotUrl =
    "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const coldUrl =
    "https://images.unsplash.com/photo-1491864483946-1f06be97b71d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8Mg%3D%3D";
  const rainUrl =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDI%3D";

  return (
    <div className="Info">
      <h2>Weather Info</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? rainUrl : info.temp > 15 ? hotUrl : coldUrl
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>
            {info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <WbSunnyIcon />
                : <SevereColdIcon />}
                <br />
              {info.name}
            </b>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Weather - {info.weather}</p>
            <p>Temperature - {info.temp}&deg;C</p>
            <p>Humidity - {info.humidity}%</p>
            <p>Min Temperature - {info.tempMin}&deg;C</p>
            <p>Max Temperature - {info.tempMax}&deg;C</p>
            <p>
              The weather in {info.name} can be described as{" "}
              <i>{info.weather}</i> and feels like - {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
