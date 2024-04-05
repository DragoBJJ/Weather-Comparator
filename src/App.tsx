import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WebAppTemplate } from "./components/templates/WebAppTemplate";
import { WeatherAppProvider } from "./context/ConfigContext";

const queryClient = new QueryClient()

const App = () => {


  return (
      <QueryClientProvider client={queryClient}>
        <WeatherAppProvider>
            <WebAppTemplate/>
      </WeatherAppProvider>
      </QueryClientProvider>
  );
};

export default App;
