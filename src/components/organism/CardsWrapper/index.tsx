import { UseLocationQuery } from "../../../hooks/api/useLocationQuery";

type CardsWrapperProps = {
  url: string
}

export const CardsWrapper = ({url}: CardsWrapperProps
  ) => {

    const {data, isLoading} =  UseLocationQuery("city", url);
    if(isLoading) return <div>Is Loading ...</div>

    console.log("data", data);
  return (
    <div className="flex flex-col w-full h-full border-2px border-solid border-red">
    </div>
  )
}