import { UseWeatherAppContext } from "../../context/ConfigContext";
import { WeatherEngine } from "../molecules/WeatherEngine";
import { Navigation } from "./navigation";
import { WeatherComparisonEnigne } from "./weatherComparisonEngine";

export const WeatherContainer = (
  ) => {

    const {locationUrl,weatherData, mode, createLocationUrl, setUniqeWeatherData} = UseWeatherAppContext();

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
      <Navigation
        title="Weather App"
        createLocationUrl={createLocationUrl} />
       {locationUrl && mode === "Search" ?
       <WeatherEngine
        locationUrl={locationUrl}
        setWeatherData={setUniqeWeatherData}
        />
       : <></>}
       {mode === "Filter" && weatherData.length ? (
        <WeatherComparisonEnigne />
       ): <></>}
    </div>
  )
}