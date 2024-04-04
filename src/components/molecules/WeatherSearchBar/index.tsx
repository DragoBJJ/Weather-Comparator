import { useState } from "react";
import { UseWeatherAppContext } from "../../../context/ConfigContext";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";


export const WeatherSearchBar = () => {

  const [city, setCity] = useState("");
  const {setLocationUrl} = UseWeatherAppContext();

  return  (
    <div>
      <Input type="text" setValue={setCity} size="small" placeholder="Choose some City" />
      <Button btnHandler={()=> setLocationUrl(city)} bgColor="red" size="medium">Send</Button>
    </div>
  );
}