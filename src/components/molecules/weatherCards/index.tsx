import { memo } from "react"
import { AirPollution } from "../../../types/components/pollutionType"
import { Weather } from "../../../types/weatherData"
import { WeatherItemType } from "../weatherItem"


type WeatherCardsType  = {
  weatherCard: (data: WeatherItemType) => JSX.Element
  atmosphericCard: (data: AirPollution["list"][0]) => JSX.Element
  weatherData?: Weather,
  pollutionData?: AirPollution["list"][0];
}

export const WeatherCards = memo<WeatherCardsType>(({weatherCard, atmosphericCard ,weatherData, pollutionData}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
    {weatherData ? weatherCard({weatherData}) : <></>}
    {pollutionData ? atmosphericCard(pollutionData) : <></>}
    </div>
  )
})