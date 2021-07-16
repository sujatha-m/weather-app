import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "./WeatherEntry";
import { Weather, WeatherLocation } from "../model/Weather";
import { readWeather } from "./api_if";
import "./WeatherSummary.scss";

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    (async function () {
      if (location) {
        const weather = await readWeather(location.id);
        setWeather(weather);
      }
    })();
  }, [location]);

  if (!location || !weather) return null;

  return (
    <div>
      <hr />
      <h2>{location.name}</h2>
      <WeatherEntry weather={weather} />
    </div>
  );
};
