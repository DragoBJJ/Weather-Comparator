import { ReactNode, createContext, useContext, useState } from 'react';
import { Location } from '../types/data';
import { buildLocationUrl } from '../utils/api';

type ConfigProviderProps =  {
  children: ReactNode;
}

type Config = {
  createLocationUrl: (city: string) => void
  locationUrl?: string
  weatherUrl: string;
  appVersion: string
}

export const ConfigContext = createContext<Config>({appVersion: "weather-app-v1.0.0"} as Config);

export const WeatherAppProvider = ({ children }: ConfigProviderProps) => {

  const [locationUrl, setUrl] = useState<string | undefined>(undefined);
  const [weatherUrl, setWeatherUrl] = useState("");
  const [locationData, setLocationData] = useState<Location[]>([]);
  const createLocationUrl = (city: string) => {
    const newUrl = buildLocationUrl({city,limit:1, apiKey: process.env.API_KEY!});
    setUrl(newUrl);
  }

 console.log("locationData",locationData)

  return <ConfigContext.Provider value={{
    appVersion: __APP_VERSION__,
    createLocationUrl,
    weatherUrl,
    locationUrl,
  }}>{children}</ConfigContext.Provider>;
};

export const UseWeatherAppContext = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
