import { API_URL, GEOLOCATION_API } from '../../constant/api';
import { APIParam, GEOApiParam } from '../../types/api';

export const buildApiURl = ({ lat, lon, part, apiKey }: APIParam) => {
  const dynamicParams = `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
  return `${API_URL}${dynamicParams}`;
};

export const buildGeoUrl = ({ city, stateCode, countryCode, limit, apiKey }: GEOApiParam) => {
  const dynamicParamas = `${city},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`;
  return `${GEOLOCATION_API}${dynamicParamas}`;
};
