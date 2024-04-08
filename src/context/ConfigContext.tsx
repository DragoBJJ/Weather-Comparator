import { ReactNode, createContext, useContext, useState } from 'react';
import { WeatherType } from '../types/api';
import { buildLocationUrl } from '../utils/api';

type ConfigProviderProps =  {
  children: ReactNode;
}

type Config = {
  createLocationUrl: (city: string) => void
  locationUrl?: string
  weatherData: WeatherType[]
  setUniqeWeatherData: (data: WeatherType) => void
  appVersion: string
}

export const ConfigContext = createContext<Config>({appVersion: "weather-app-v1.0.0"} as Config);

export const WeatherAppProvider = ({ children }: ConfigProviderProps) => {
  const [locationUrl, setUrl] = useState<string | undefined>(undefined);
  const [weatherData, setWeatherData] = useState<WeatherType[]>([]);

  const createLocationUrl = (city: string) => {
    const newUrl = buildLocationUrl({city,limit:1, apiKey: process.env.API_KEY!});
    setUrl(newUrl);
  }

   const setUniqeWeatherData = (data: WeatherType) => {
    setWeatherData((prev)=> {
      const res = prev.find(({weatherData})=> weatherData.name === data?.weatherData.name)
       if(res?.weatherData) return prev
      return [...prev, data]
    })
  }


  console.log("weatherData", weatherData)

  return <ConfigContext.Provider value={{
    appVersion: __APP_VERSION__,
    setUniqeWeatherData,
    createLocationUrl,
    weatherData,
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
