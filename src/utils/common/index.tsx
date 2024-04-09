import { Typography } from "../../components/atoms/typography";
import { PollutionApiData, PollutionData } from "../../types/pollutionData";

export const firstLetterUpperCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const calculateCelciusTemp = (temp: number) => {
  const KALIVIN = 273.15;
 return  Math.round(temp -  KALIVIN);
}

export const mapPollutionValue  = (components: PollutionApiData["components"])=> {
   return Object.keys(components).map((item, index)=> {
   const key  = item as keyof PollutionApiData["components"];
   const pollutionItem  = PollutionData[key] ?? null;
   if(pollutionItem) {
     return  (
         <Typography key={`${key}-${index}`} tag="p" textColor="black" fontFamily="serif" textSize="base" textPosition="left">
             {pollutionItem}: <Typography textColor='blue' textSize="base" textPosition="center" tag="span">{components[key]} (μg/m³)</Typography>
       </Typography>
     )
     }
     return <></>
  })
}

export function mapDictValueToOption<T extends Record<string,string>>(items: T){
  if(!items) return <></>
 return Object.entries(items).map((item)=> {
  return (
    <option key={item[0]} value={item[0]}>{item[1]}</option>
  )
 })
}
