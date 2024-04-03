import { Button } from "./components/atoms/button/button";

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Weather App</h1>
      </div>
      <Button text="Elegancko" bgColor="red" size="medium"/>
    </div>
  );
};

export default App;
