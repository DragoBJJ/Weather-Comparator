import { UseLocationQuery } from "../../../hooks/api/useLocationQuery";

type CardsWrapperProps = {
  locationUrl?: string
}
export const CardsWrapper = ({locationUrl}: CardsWrapperProps
  ) => {
    const {data, isLoading, isError, error} =  UseLocationQuery("weather", locationUrl);
    if(isLoading) return <div>Weather Is Loading ...</div>
    if(isError) return  <p>{error.message}</p>
    console.log("data",data)
  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
    </div>
  )
}