import { memo } from "react";
import { WeatherType } from "../../../types/api";
import { AirPollution } from "../../../types/data";
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
        {/* <div className="bg-white rounded-lg shadow-sm p-4 mb-4">>
        </div> */}
       {weatherData ? weatherData.map(({weatherData, pollutionData}, index)=> {
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
       }): <></>}
    </div>
  )
})