import axios from 'axios';
import { createWeatherConditionUrl } from '.';
import { AirPollution, Location, Weather } from '../../types/data';

export async function fetchData<T>(apiUrl: string | undefined) {
  if (!apiUrl) throw new Error("Your api url doesn't exist");
  try {
    const { data } = await axios.get<T>(apiUrl);
    return data;
  } catch (error) {
    throw new Error("Your data doesn't exist");
  }
}
export async function getWeatherCondition<T, U>(weatherUrl: string, pollutionURL: string) {
  try {
    const weatherData = await fetchData<T>(weatherUrl);
    const pollutionData = await fetchData<U>(pollutionURL);
    return { weatherData, pollutionData };
  } catch (error) {
    throw new Error("Your weather data doesn't exist");
  }
}

export const fetchWeatcher = async (apiUrl: string | undefined) => {
  const locationData = await fetchData<Location[]>(apiUrl);
  const res = createWeatherConditionUrl(locationData);
  if (!res) throw new Error("Your Location doesn't exist");
  const { weatherUrl, pollutionURL } = res;
  return await getWeatherCondition<Weather, AirPollution>(weatherUrl, pollutionURL);
};
