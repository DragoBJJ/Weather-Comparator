import { memo } from "react"
import { UseWeatherAppContext } from "../../../context/ConfigContext"
import { SwitchModeType } from "../../../types/eventType"
import Switch from "../../atoms/Switch"
import { Typography } from "../../atoms/typography/typography"
import { WeatherSearchBar } from "../../molecules/WeatherSearchBar"

type NavigatorType = {
createLocationUrl: (city: string) => void
title: string
}

export const Navigation = memo<NavigatorType>(({title, createLocationUrl}) => {

    const {mode, setMode} = UseWeatherAppContext();

    console.log("RENDER IN NAVIGATION")
  return (
    <div className="flex flex-col w-full min-h-[210px] p-6 bg-white rounded-lg shadow-sm mb-4">
    <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 {title}</Typography>
    <div className="flex justify-between items-start w-full">
     {mode === 'Search' ? <WeatherSearchBar createLocationUrl={createLocationUrl}/> : <></>}
    <Switch<SwitchModeType> label="Mode" values={["Filter", "Search"]} stateValue={mode} setStateValue={setMode} />
    </div>
    </div>
  )
})