import { useEffect } from "react";
import { UseWeatherAppContext } from "../../../context/ConfigContext";
import { UseWeatherConditionQuery } from "../../../hooks/api/useLocationQuery";
import { PolutionItem } from "../../molecules/pollutionItem";
import { WeatherItem } from "../../molecules/weatherItem";



export const CardsWrapper = (
  ) => {
    const {locationUrl ,setWeatherData} = UseWeatherAppContext();
    const {data, isLoading, isError, error} =  UseWeatherConditionQuery(locationUrl);

    useEffect(()=> {
      if(!data) return
      setWeatherData(data)
    },[data, setWeatherData])

    if(isLoading) return <div>Weather Is Loading ...</div>
    if(isError) return  <p>{error ? error.message: "Error with you weather data"}</p>
    if(!data) return <></>

    const {weatherData, pollutionData} = data || {};

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
    {weatherData ? <WeatherItem weatherData={weatherData} /> : <></>}
    {pollutionData ? <PolutionItem {...pollutionData}/> : <></>}
    </div>
  )
}