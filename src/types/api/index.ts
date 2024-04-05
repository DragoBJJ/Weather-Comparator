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

export type QueryKey = 'city' | 'weather';
