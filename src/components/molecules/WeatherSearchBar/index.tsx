import { useState } from "react";
import { UseWeatherAppContext } from "../../../context/ConfigContext";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";


export const WeatherSearchBar = () => {

  const [city, setCity] = useState("");
  const {createLocationUrl} = UseWeatherAppContext();

  return  (
    <div>
      <Input type="text" setValue={setCity} border="oceanBlue" value={city} size="small" placeholder="Choose some City" />
      <Button btnHandler={()=>  {
        if(!city.length) return
        createLocationUrl(city)
        setCity("");
      }} bgColor="red" size="medium">Send</Button>
    </div>
  );
}