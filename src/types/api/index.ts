export type APIParam = {
  lat: string;
  lon: string;
  part: string;
  apiKey: string;
};

export type APIGeoParam = {
  city: string;
  apiKey: string;
  stateCode?: string;
  countryCode?: string;
  limit?: number;
};

export type QueryKey = 'city' | 'weather';
