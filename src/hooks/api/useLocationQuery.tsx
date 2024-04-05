import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKey } from "../../types/api";
import { Location, Weather } from "../../types/data";
import { createWeatherUrl } from "../../utils/api";

export function  UseLocationQuery(key: QueryKey, apiUrl: string | undefined) {
  return useQuery({
    queryKey: ["weather", apiUrl],
    queryFn: async () => {
        if(!apiUrl) throw new Error("Your api url doesn't exist");
      const {data: locationData} = await axios.get<Location[]>(apiUrl);
      const weatherUrl = createWeatherUrl(locationData);
      if(!weatherUrl) throw new Error("Your Location doesn't exist");
      const {data} = await axios.get<Weather[]>(weatherUrl);
      console.log("weather data from rtk", data)
      return data;
    },
    enabled: !!apiUrl
  });
}
