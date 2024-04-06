import { AirPollution, Weather } from '../data';

export type APIParam = {
  lat: number;
  lon: number;
  apiKey: string;
};

export type APIGeoParam = {
  city: string;
  apiKey: string;
  stateCode?: string;
  countryCode?: string;
  limit?: number;
};

export type WeatherAPIType = {
  weatherData: Weather;
  pollutionData: AirPollution;
};

export type WeatherType = {
  weatherData: Weather;
  pollutionData: AirPollution['list'][0];
};
