import { useQuery } from "@tanstack/react-query";
import { fetchWeatcher } from "../../utils/api/calls";



export function  UseWeatherConditionQuery(apiUrl: string | undefined) {
  return useQuery({
    queryKey: ["weather", apiUrl],
    queryFn:  () =>  fetchWeatcher(apiUrl),
    enabled: !!apiUrl,
    select: (({weatherData, pollutionData})=> {
     return {
      weatherData,
      pollutionData: pollutionData.list[0]
     }
   }),
})}
