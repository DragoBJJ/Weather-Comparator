import { memo } from "react";
import { WeatherType } from "../../../types/api";
import { AirPollution } from "../../../types/components/pollutionType";
import { Typography } from "../../atoms/typography";
import { PollutionItem } from "../../molecules/pollutionItem";
import { WeatherCards } from "../../molecules/weatherCards";
import { WeatherItem, WeatherItemType } from "../../molecules/weatherItem";


type WeatherComparatorType = {
  weatherData: WeatherType[]
}


export const WeatherComparator= memo<WeatherComparatorType>(({weatherData}
  ) => {
  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
       {weatherData.length >= 2 ? weatherData.map(({weatherData, pollutionData}, index)=> {
        return (
          <WeatherCards
          key={index}
          weatherCard={({weatherData}: WeatherItemType)=> {
            return <WeatherItem weatherData={weatherData}/>
          }}
          atmosphericCard={(data: AirPollution["list"][0]) => {
            return <PollutionItem {...data}/>
          }}
          weatherData={weatherData}
          pollutionData={pollutionData}
          />
        )
       }): <Typography tag="h2" textColor="blue" fontFamily="serif" textSize="2xl" textSpace="md" textPosition="center" >
          Search for a minimum of two cities and then go to the search engine</Typography>}
    </div>
  )
})