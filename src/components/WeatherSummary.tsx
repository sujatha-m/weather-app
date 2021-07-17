import React, { FC, useEffect, useState } from "react";
import { WeatherEntry } from "./WeatherEntry";
import { Weather, WeatherLocation } from "../model/Weather";
import { readWeather } from "./ApiIf";
import  Card from "../elements/Card/Card";
import "./WeatherSummary.scss";

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [cities, setCities] = useState<string[]>([]);

  const addToFav = (city: string) => {
    setCities([city, ...cities]);
  };

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
    <Card>
      <div>
        <h2>{location.name}</h2>
        <WeatherEntry weather={weather} />
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => addToFav(location.name)}
        >
          Add to Favorites
        </button>
      </div>
    </Card>
  );
};
