import { FC, useState } from "react";
import "./App.css";
import { LocationSearch } from "./LocationSearch";
import { WeatherLocation } from "../model/Weather";
import { searchLocation } from "./api_if";
import { WeatherSummary } from "./WeatherSummary";

const App: FC = () => {
  const [currentLocation, setCurrentLocation] =
    useState<WeatherLocation | null>(null);

  let addLocation = async (term: string) => {
    const location = await searchLocation(term);

    if (location) {
      setCurrentLocation(location);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} />
      <WeatherSummary location={currentLocation} />
    </div>
  );
};

export default App;
