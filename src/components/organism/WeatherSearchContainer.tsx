import { UseWeatherAppContext } from "../../context/ConfigContext";
import { Typography } from "../atoms/typography/typography";
import { WeatherEngine } from "../molecules/WeatherEngine";
import { WeatherSearchBar } from "../molecules/WeatherSearchBar";

export const WeatherSearchContainer = (
  ) => {

    const {locationUrl, createLocationUrl, setWeatherData} = UseWeatherAppContext();

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 Weather App</Typography>
          <WeatherSearchBar createLocationUrl={createLocationUrl}/>
        </div>
        <WeatherEngine
        locationUrl={locationUrl}
        setWeatherData={setWeatherData}
        />
    </div>
  )
}