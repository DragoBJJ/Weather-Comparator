import { memo, useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";


type WeatherSearchBarType = {
  createLocationUrl: (city: string) => void
}

export const WeatherSearchBar = memo<WeatherSearchBarType>(({createLocationUrl}) => {


  const [city, setCity] = useState("");

  const weatherHandler = () => {
    if(!city.length) return
    createLocationUrl(city)
    setCity("");
  }

  return  (
    <div>
      <Input type="text" setValue={setCity} border="oceanBlue" value={city} size="small" placeholder="Choose some City" />
      <Button btnHandler={()=> weatherHandler()} bgColor="blue" size="medium">Send</Button>
    </div>
  );
})