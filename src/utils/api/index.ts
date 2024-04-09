import { AIR_POLLUTION_URL, LOCATION_API, WEATHER_URL } from '../../constant/api';
import { APIGeoParam, APIParam } from '../../types/api';
import { Location } from '../../types/weatherData';

export const buildWeatherUrl = ({ lat, lon, apiKey }: APIParam) => {
  const dynamicParams = `lat=${String(lat)}&lon=${String(lon)}&appid=${apiKey}`;
  return `${WEATHER_URL}${dynamicParams}`;
};
export const buildAirPollutionUrl = ({ lat, lon, apiKey }: APIParam) => {
  const dynamicParams = `lat=${String(lat)}&lon=${String(lon)}&appid=${apiKey}`;
  return `${AIR_POLLUTION_URL}${dynamicParams}`;
};
export const buildLocationUrl = ({ city, limit, apiKey }: APIGeoParam) => {
  const dynamicParamas = `${city},&limit=${limit}&appid=${apiKey}`;
  return `${LOCATION_API}${dynamicParamas}`;
};

export const getWeatherParam = (data: Location[]) => {
  if (!data?.length) return;
  const [location] = data || {};
  if (!location.country) return;
  return {
    lat: location.lat,
    lon: location.lon,
  };
};

export const createWeatherConditionUrl = (locations: Location[] | undefined) => {
  if (!locations || !locations.length) return;
  const params = getWeatherParam(locations);
  if (!params) return;
  const { lat, lon } = params;
  const weatherUrl = buildWeatherUrl({ lat, lon, apiKey: process.env.API_KEY! });
  const pollutionURL = buildAirPollutionUrl({ lat, lon, apiKey: process.env.API_KEY! });
  return {
    weatherUrl,
    pollutionURL,
  };
};
