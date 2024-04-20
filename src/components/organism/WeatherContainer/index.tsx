import { useState } from "react";
import { UseWeatherAppContext } from "../../../context/ConfigContext";
import { SwitchModeType } from "../../../types/eventType";
import { WeatherComparator } from "../../molecules/WeatherComparator";
import { WeatherEngine } from "../../molecules/WeatherEngine";
import { Navigation } from "../../molecules/navigation";

export const WeatherContainer = (
  ) => {

    const {locationUrl, weatherData, setUniqeWeatherData} = UseWeatherAppContext();
    const [mode, setMode] = useState<SwitchModeType>("Search");

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
      <Navigation
        mode={mode}
        setMode={setMode}
        title="Drago Weather App"
        />
       {locationUrl && mode === "Search" ?
       <WeatherEngine
        locationUrl={locationUrl}
        setWeatherData={setUniqeWeatherData}
        />
       : <></>}
       {mode === "Filter" ? (
        <WeatherComparator weatherData={weatherData}/>
       ): <></>}
    </div>
  )
}