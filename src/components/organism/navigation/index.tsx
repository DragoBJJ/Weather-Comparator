import { Dispatch, SetStateAction, memo, useState } from "react"
import { SwitchModeType } from "../../../types/eventType"
import { PollutionSelectData, PollutionSelectDataType } from "../../../types/pollutionData"
import Switch from "../../atoms/Switch"
import { SelectInput } from "../../atoms/select"
import { Typography } from "../../atoms/typography"
import { WeatherSearchBar } from "../../molecules/WeatherSearchBar"

type NavigatorType = {
createLocationUrl: (city: string) => void
title: string
mode: SwitchModeType,
setMode: Dispatch<SetStateAction<SwitchModeType>>
}


export const Navigation = memo<NavigatorType>(({title, createLocationUrl,mode
,setMode}) => {

  const [selectedValue, setSelectedValue] = useState("");

  console.log("selectedValue",selectedValue)

  return (
    <div className="flex flex-col w-full min-h-[210px] p-6 bg-white rounded-lg shadow-sm mb-4">
    <Typography tag="h1" textSize="2xl" textColor="blue" textPosition="center">🚀 {title}</Typography>
    <div className="flex justify-between items-start w-full">
     {mode === 'Search' ? <WeatherSearchBar createLocationUrl={createLocationUrl}/> : <></>}
     {mode === "Filter" ?
     <SelectInput<PollutionSelectDataType>
        items={PollutionSelectData}
        setValue={setSelectedValue}
        value={selectedValue}
        border="oceanBlue"
        size="medium"
       />
       : <></>}
      <Switch<SwitchModeType> label="Mode" values={["Filter", "Search"]} stateValue={mode} setStateValue={setMode} />
    </div>
    </div>
  )
})