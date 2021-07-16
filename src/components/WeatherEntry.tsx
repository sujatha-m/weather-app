import { FC } from "react";
import { Weather } from "../model/Weather";
import { getIconUrl } from "./api_if";

interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({ weather }) => (
  <div>
    <div>
      Current Temp: <strong>{weather.main.temp}°C</strong>
      <div>
        (Min_Temp: {weather.main.temp_min}°C / Max_Temp: {weather.main.temp_max}
        °C)
      </div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map((condition) => (
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main} />{" "}
        {condition.main} {condition.description}
      </div>
    ))}
  </div>
);
