import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherAppContainer } from "./components/templates/WeatherAppContainer";
import { WeatherAppProvider } from "./context/ConfigContext";

const queryClient = new QueryClient()

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <WeatherAppProvider>
            <WeatherAppContainer/>
      </WeatherAppProvider>
      </QueryClientProvider>
  );
};

export default App;
