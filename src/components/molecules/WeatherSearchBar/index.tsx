import { memo, useState } from "react";
import { Button } from "../../atoms/button";
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
    <div className="flex flex-col mr-auto">
      <Input type="text" setValue={setCity} border="oceanBlue" value={city} size="small" placeholder="Choose City" />
      <Button btnHandler={()=> weatherHandler()} bgColor="blue" size="medium" position="center">Check weather</Button>
    </div>
  );
})