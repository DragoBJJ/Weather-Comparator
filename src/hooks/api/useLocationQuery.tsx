import { useQuery } from "@tanstack/react-query";
import { createWeatherConditionUrl } from "../../utils/api";
import { getLocationData, getWeatherData } from "../../utils/api/calls";

export function  UseWeatherConditionQuery(apiUrl: string | undefined) {
  return useQuery({
    queryKey: ["weather", apiUrl],
    queryFn: async () => {
     const locationData = await getLocationData(apiUrl);
      const res = createWeatherConditionUrl(locationData);
        if(!res) throw new Error("Your Location doesn't exist");
        const {weatherUrl, pollutionURL} = res;
        return getWeatherData(weatherUrl, pollutionURL);
    },
    enabled: !!apiUrl
  });
}
