import { API_URL, LOCATION_API } from '../../constant/api';
import { APIParam, GEOApiParam } from '../../types/api';

export const buildApiURl = ({ lat, lon, part, apiKey }: APIParam) => {
  const dynamicParams = `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`;
  return `${API_URL}${dynamicParams}`;
};

export const buildLocationUrl = ({ city, limit, apiKey }: GEOApiParam) => {
  const dynamicParamas = `${city},&limit=${limit}&appid=${apiKey}`;
  return `${LOCATION_API}${dynamicParamas}`;
};
