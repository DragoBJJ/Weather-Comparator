import { memo } from 'react';
import { PollutionApiData } from '../../../types/data/pollutionData';
import { mapPollutionValue } from '../../../utils/common';
import { Typography } from '../../atoms/typography/typography';

export const PolutionItem = memo<PollutionApiData>(({ components, main }) => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-center  m-auto  w-full max-w-[700px]  h-[400px]  bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col h-full w-full justify-center  p-12">
      <Typography tag="p" textColor="black" fontFamily="serif" textSize="base" textPosition="left">
            Air Quality Index (AQI) on a scale of 1 to 5, where 1 means very good quality and 5 means very bad quality. : <Typography textColor='blue' textSize="lg" textPosition="center" tag="span">{main.aqi}</Typography>
       </Typography>
        <div className="flex flex-col w-full">
            {mapPollutionValue(components)}
        </div>
      </div>
    </div>
  );
});
