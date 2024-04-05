import { UseWeatherAppContext } from "../../context/ConfigContext";
import { Typography } from "../atoms/typography/typography";
import { WeatherSearchBar } from "../molecules/WeatherSearchBar";
import { CardsWrapper } from "../organism/CardsWrapper";


export const WebAppTemplate = (
  ) => {

    const {locationUrl} = UseWeatherAppContext();
    console.log("locationUrl", locationUrl)

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Typography tag="h1" textSize="5xl" textColor="blue" textPosition="center" className="text-xl font-bold text-center">🚀 Weather App</Typography>
          <WeatherSearchBar/>
        </div>
        {locationUrl && <CardsWrapper locationUrl={locationUrl} /> }
    </div>
  )
}