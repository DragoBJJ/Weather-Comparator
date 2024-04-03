export type APIParam = {
  lat: string;
  lon: string;
  part: string;
  apiKey: string;
};

export type GEOApiParam = {
  city: string;
  stateCode?: string;
  countryCode?: string;
  limit?: string;
  apiKey: string;
};
