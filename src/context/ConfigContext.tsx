import { ReactNode, createContext, useContext, useState } from 'react';
import { buildLocationUrl } from '../utils/api';

type ConfigProviderProps =  {
  children: ReactNode;
}

type Config = {
  createLocationUrl: (city: string) => void
  locationUrl?: string
  appVersion: string
}

export const ConfigContext = createContext<Config>({appVersion: "weather-app-v1.0.0"} as Config);

export const WeatherAppProvider = ({ children }: ConfigProviderProps) => {
  const [locationUrl, setUrl] = useState<string | undefined>(undefined);

  const createLocationUrl = (city: string) => {
    const newUrl = buildLocationUrl({city,limit:1, apiKey: process.env.API_KEY!});
    setUrl(newUrl);
  }

  return <ConfigContext.Provider value={{
    appVersion: __APP_VERSION__,
    createLocationUrl,
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
