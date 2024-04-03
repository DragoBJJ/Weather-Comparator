import { Button } from "./components/atoms/button/button";
import { WebAppTemplate } from "./components/templates/WebAppTemplate";

const App = () => {
  return (
    <WebAppTemplate>
   <>
   <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Weather App</h1>
      </div>
      <Button  bgColor="red" size="medium">Send</Button>
   </>
    </WebAppTemplate>
  );
};

export default App;
