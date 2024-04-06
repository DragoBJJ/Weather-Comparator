import { memo, useEffect } from "react";
import { UseWeatherConditionQuery } from "../../../hooks/api/useLocationQuery";
import { WeatherType } from "../../../types/api";
import { AirPollution } from "../../../types/data";
import { PollutionItem } from "../pollutionItem";
import { WeatherCards } from "../weatherCards";
import { WeatherItem, WeatherItemType } from "../weatherItem";


type WeatherEngineType = {
  locationUrl?:  string | undefined,
  setWeatherData?:React.Dispatch<React.SetStateAction<WeatherType[]>>
}
export const WeatherEngine = memo<WeatherEngineType>(({locationUrl, setWeatherData}) => {

    const {data, isLoading, isError, error} =  UseWeatherConditionQuery(locationUrl);

    useEffect(()=> {
      if(!data || !setWeatherData) return
      setWeatherData((prev)=> [...prev, data])
    },[data, setWeatherData])

    if(isLoading) return <div>Weather Is Loading ...</div>
    if(isError) return  <p>{error ? error.message: "Error with you weather data"}</p>

    const {weatherData, pollutionData} = data || {};

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
     <WeatherCards
     weatherCard={({weatherData}: WeatherItemType)=> {
          return <WeatherItem weatherData={weatherData}/>
        }}
     atmosphericCard={(data: AirPollution["list"][0]) => {
          return <PollutionItem {...data}/>
        }}
        weatherData={weatherData}
        pollutionData={pollutionData}
        />

    </div>
  )
})