import axios from 'axios';
import { WeatherAPIType } from '../../types/api';
import { AirPollution, Location, Weather } from '../../types/data';

export const getLocationData = async (apiUrl: string | undefined) => {
  if (!apiUrl) throw new Error("Your api url doesn't exist");
  try {
    const { data } = await axios.get<Location[]>(apiUrl);
    return data;
  } catch (error) {
    throw new Error("Your location data doesn't exist");
  }
};

export const getWeatherData = async (
  weatherUrl: string,
  pollutionURL: string,
): Promise<WeatherAPIType> => {
  try {
    const { data: weatherData } = await axios.get<Weather>(weatherUrl);
    const { data: pollutionData } = await axios.get<AirPollution>(pollutionURL);
    return { weatherData, pollutionData };
  } catch (error) {
    throw new Error("Your weather data doesn't exist");
  }
};
