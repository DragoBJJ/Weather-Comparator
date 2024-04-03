import { ReactNode, createContext, useContext } from 'react';


type Config = {
  appVersion: string
}

export const ConfigContext = createContext<Config>({appVersion: ""} as Config);

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const cfg: Config = {
    appVersion: __APP_VERSION__,
  };

  return <ConfigContext.Provider value={cfg}>{children}</ConfigContext.Provider>;
};

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
