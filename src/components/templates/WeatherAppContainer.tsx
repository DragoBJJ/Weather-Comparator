import { Typography } from "../atoms/typography/typography";
import { WeatherSearchBar } from "../molecules/WeatherSearchBar";
import { CardsWrapper } from "../organism/CardsWrapper";

export const WeatherAppContainer = (
  ) => {

  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 Weather App</Typography>
          <WeatherSearchBar/>
        </div>
        <CardsWrapper  />
    </div>
  )
}