import { UseWeatherConditionQuery } from "../../../hooks/api/useLocationQuery";
import { WeatherItem } from "../../molecules/weatherItem";

type CardsWrapperProps = {
  locationUrl?: string
}
export const CardsWrapper = ({locationUrl}: CardsWrapperProps
  ) => {
    const {data, isLoading, isError, error} =  UseWeatherConditionQuery(locationUrl);
    if(isLoading || !data) return <div>Weather Is Loading ...</div>
    if(isError) return  <p>{error.message}</p>
    console.log("data",data)
  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
      <WeatherItem weatherData={data.weatherData} />
    </div>
  )
}