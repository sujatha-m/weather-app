import React, { FC, useState } from "react";
import InputField from "../elements/InputField/InputField";
import "./App.css";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const disableSearch = locationSearch.trim() === "";

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch("");
  };

  return (
    <div>
      <InputField
        type="text"
        name="city"
        placeholder="Enter a city"
        onChange={(e): void => setLocationSearch(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={addLocation}
        disabled={disableSearch}
      >
        Search
      </button>
    </div>
  );
};
