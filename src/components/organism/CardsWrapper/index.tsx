import { memo, useEffect } from "react";
import { UseWeatherConditionQuery } from "../../../hooks/api/useLocationQuery";
import { WeatherType } from "../../../types/api";
import { AirPollution } from "../../../types/data";
import { WeatherItemType } from "../../molecules/weatherItem";


type CardsWrapperType = {
  weatherCard: (data: WeatherItemType) => JSX.Element
  atmosphericCard: (data: AirPollution["list"][0]) => JSX.Element
  locationUrl:  string | undefined,
  setWeatherData:React.Dispatch<React.SetStateAction<WeatherType | null>>
}


export const CardsWrapper = memo<CardsWrapperType>(({weatherCard,atmosphericCard, locationUrl, setWeatherData}) => {
    const {data, isLoading, isError, error} =  UseWeatherConditionQuery(locationUrl);

    useEffect(()=> {
      if(!data) return
      setWeatherData(data)
    },[data, setWeatherData])

    if(isLoading) return <div>Weather Is Loading ...</div>
    if(isError) return  <p>{error ? error.message: "Error with you weather data"}</p>

    const {weatherData, pollutionData} = data || {};

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
    {weatherData ? weatherCard({weatherData}) : <></>}
    {pollutionData ? atmosphericCard(pollutionData) : <></>}
    </div>
  )
})