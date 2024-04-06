import { UseWeatherAppContext } from "../../context/ConfigContext";
import { AirPollution } from "../../types/data";
import { Typography } from "../atoms/typography/typography";
import { WeatherSearchBar } from "../molecules/WeatherSearchBar";
import { PolutionItem } from "../molecules/pollutionItem";
import { WeatherItem, WeatherItemType } from "../molecules/weatherItem";
import { CardsWrapper } from "../organism/CardsWrapper";

export const WeatherAppContainer = (
  ) => {

    const {locationUrl, createLocationUrl, setWeatherData} = UseWeatherAppContext();

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 Weather App</Typography>
          <WeatherSearchBar createLocationUrl={createLocationUrl}/>
        </div>
        <CardsWrapper
        weatherCard={({weatherData}: WeatherItemType)=> {
          return <WeatherItem weatherData={weatherData}/>
        }}
        atmosphericCard={(data: AirPollution["list"][0]) => {
          return <PolutionItem {...data}/>
        }}
        locationUrl={locationUrl}
        setWeatherData={setWeatherData}
        />
    </div>
  )
}