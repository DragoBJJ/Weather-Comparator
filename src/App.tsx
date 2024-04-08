import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherContainer } from "./components/organism/WeatherContainer";
import { WeatherAppProvider } from "./context/ConfigContext";

const queryClient = new QueryClient()

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <WeatherAppProvider>
            <WeatherContainer/>
      </WeatherAppProvider>
      </QueryClientProvider>
  );
};

export default App;
