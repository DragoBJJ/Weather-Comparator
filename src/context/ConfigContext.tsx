import { ReactNode, createContext, useContext, useState } from 'react';
import { buildLocationUrl } from '../utils/api';

type ConfigProviderProps =  {
  children: ReactNode;
}

type Config = {
  appVersion: string
  url: string;
  setLocationUrl: (city: string) => void
}

export const ConfigContext = createContext<Config>({appVersion: "weather-app-v1.0.0"} as Config);



export const WeatherAppProvider = ({ children }: ConfigProviderProps) => {

  const [url, setUrl] = useState("");

  const setLocationUrl = (city: string) => {
    const newUrl = buildLocationUrl({city,limit:1, apiKey: process.env.API_KEY!});
    setUrl(newUrl)
  }

  return <ConfigContext.Provider value={{
    appVersion: __APP_VERSION__,
    setLocationUrl: setLocationUrl,
    url: url,
  }}>{children}</ConfigContext.Provider>;
};

export const UseWeatherAppContext = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
