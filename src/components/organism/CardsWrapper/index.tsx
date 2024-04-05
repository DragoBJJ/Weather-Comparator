import { UseWeatherConditionQuery } from "../../../hooks/api/useLocationQuery";
import { PolutionItem } from "../../molecules/pollutionItem";
import { WeatherItem } from "../../molecules/weatherItem";

type CardsWrapperProps = {
  locationUrl?: string
}
export const CardsWrapper = ({locationUrl}: CardsWrapperProps
  ) => {
    const {data, isLoading, isError, error} =  UseWeatherConditionQuery(locationUrl);
    if(isLoading) return <div>Weather Is Loading ...</div>
    if(isError || !data) return  <p>{error ? error.message: "Error with you Data"}</p>

    const {weatherData, pollutionData} = data;
    const pollution =  pollutionData.list[0] ?? null;
  return (
    <div className="flex w-full h-full">
    {weatherData ? <WeatherItem weatherData={weatherData} /> : <></>}
    {pollutionData ? <PolutionItem {...pollution}/> : <></>}
    </div>
  )
}