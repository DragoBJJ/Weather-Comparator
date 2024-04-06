import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherSearchContainer } from "./components/organism/WeatherSearchContainer";
import { WeatherAppProvider } from "./context/ConfigContext";

const queryClient = new QueryClient()

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <WeatherAppProvider>
            <WeatherSearchContainer/>
      </WeatherAppProvider>
      </QueryClientProvider>
  );
};

export default App;
