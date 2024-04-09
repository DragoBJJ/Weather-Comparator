import { Dispatch, SetStateAction, memo } from "react"
import { UseWeatherAppContext } from "../../../context/ConfigContext"
import { SwitchData, SwitchModeType } from "../../../types/eventType"
import { PollutionSelectData, PollutionSelectDataType } from "../../../types/pollutionData"
import Switch from "../../atoms/Switch"
import { SelectInput } from "../../atoms/select"
import { Typography } from "../../atoms/typography"
import { WeatherSearchBar } from "../../molecules/WeatherSearchBar"

type NavigatorType = {
title: string
mode: SwitchModeType,
setMode: Dispatch<SetStateAction<SwitchModeType>>
}

export const Navigation = memo<NavigatorType>(({title, mode
,setMode}) => {

    const {createLocationUrl ,sortWeatherData} = UseWeatherAppContext();

   return (
      <div className="flex flex-col w-full min-h-[210px] p-6 bg-white rounded-lg shadow-sm mb-4">
      <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 {title}</Typography>
      <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-[200px] mt-6 md:mt-0">
       {mode === 'Search' ? <WeatherSearchBar createLocationUrl={createLocationUrl}/> : <></>}
       {mode === "Filter" ?
        <SelectInput<PollutionSelectDataType>
            title="sort by largest value"
            items={PollutionSelectData}
            handleValue={sortWeatherData}
            border="oceanBlue"
            size="medium"
         />
         : <></>}
               <Switch<SwitchModeType> label="Mode" values={SwitchData} stateValue={mode} setStateValue={setMode} />
      </div>
      </div>
    )
})