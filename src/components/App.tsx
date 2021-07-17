import { FC, useState } from "react";
import "./App.css";
import { LocationSearch } from "./LocationSearch";
import { WeatherLocation } from "../model/Weather";
import { searchLocation } from "./ApiIf";
import { WeatherSummary } from "./WeatherSummary";
import { ErrorAlert } from "./Alerts";

const App: FC = () => {
  const [currentLocation, setCurrentLocation] =
    useState<WeatherLocation | null>(null);
  const [error, setError] = useState("");

  let addLocation = async (term: string) => {
    setError("");
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location '${term}' found!!`);
    } else {
      setCurrentLocation(location);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} />
      <br></br>
      {error
        ? <ErrorAlert message={error} />
        : <WeatherSummary location={currentLocation} />
      }
    </div>
  );
};

export default App;
