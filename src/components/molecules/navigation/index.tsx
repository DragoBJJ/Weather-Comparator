import { Dispatch, SetStateAction, useMemo } from "react"
import { PollutionSelectData } from "../../../constant/components/pollutionData"
import { UseWeatherAppContext } from "../../../context/ConfigContext"
import { PollutionSelectDataType } from "../../../types/components/pollutionType"
import { SwitchData, SwitchModeType } from "../../../types/eventType"
import Switch from "../../atoms/Switch"
import { SelectInput } from "../../atoms/select"
import { Typography } from "../../atoms/typography"
import { WeatherSearchBar } from "../WeatherSearchBar"

type NavigatorType = {
title: string
mode: SwitchModeType,
setMode: Dispatch<SetStateAction<SwitchModeType>>
}

export const Navigation = ({title, mode ,setMode}: NavigatorType) => {

    const {createLocationUrl, weatherData ,sortWeatherData} = UseWeatherAppContext();

   return useMemo(()=> {
    return (
        <div className="flex flex-col w-full min-h-[210px] p-6 bg-white rounded-lg shadow-sm mb-4">
        <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 {title}</Typography>
        <div className="flex flex-col justify-between w-full min-h-[200px] mt-6 md:mt-0">
        <Switch<SwitchModeType> label="Mode" values={SwitchData} stateValue={mode} setStateValue={setMode} />
        {mode === 'Search' ? <WeatherSearchBar createLocationUrl={createLocationUrl}/> : <></>}
         {mode === "Filter" && weatherData.length >= 2 ?
          <SelectInput<PollutionSelectDataType>
              title="Sort By Largest Value"
              items={PollutionSelectData}
              handleValue={sortWeatherData}
              border="oceanBlue"
              size="medium"
           />
           : <></>}
          </div>
        </div>
    )
   },[createLocationUrl, mode, setMode, sortWeatherData, title, weatherData.length])
}
