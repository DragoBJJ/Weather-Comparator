import { memo } from 'react';
import { PollutionApiData } from '../../../types/pollutionData';
import { mapPollutionValue } from '../../../utils/common';
import { Typography } from '../../atoms/typography';

export const PollutionItem = memo<PollutionApiData>(({ components, main }) => {

  return (
    <div className="flex flex-col my-2 lg:mx-2 md:flex-row justify-center items-center w-full max-w-[100%] md:max-w-[75%] h-[500px] lg:max-w-[45%] md:h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col h-full w-full justify-center  p-12">
      <Typography tag="p" textColor="black" fontFamily="serif" textSize="base" textPosition="left">
            Air Quality Index (AQI) on a scale of 1 to 5: <Typography textColor='blue' textSize="2xl" textPosition="center" tag="span">{main.aqi}</Typography>
       </Typography>

        <div className="flex flex-col w-full">
            {mapPollutionValue(components)}
        </div>
      </div>
    </div>
  );
});
