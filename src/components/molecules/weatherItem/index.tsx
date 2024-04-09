import { Images, ImagesType } from '../../../types/images';
import { Weather } from '../../../types/weatherData';
import { calculateCelciusTemp } from '../../../utils/common';
import { Typography } from '../../atoms/typography';

export type WeatherItemType = {
  weatherData: Weather;
  onHandler?: (id: number) => void;
};

export const WeatherItem = ({ weatherData, onHandler }: WeatherItemType) => {

  const {weather, main: temp, name ,sys: {country}} = weatherData;
  const {id,main,description} = weather[0] || {};
  const imageSrc = Images[main as keyof ImagesType] ??  "";

  return (
    <div
      onClick={() => onHandler && onHandler(id)}
      className="overflow-hidden my-2 mx-4 bg-white flex  flex-col w-full max-w-[350px] h-[400px] cursor-pointer shadow-xl rounded-xl"
    >
   {imageSrc && <img src={imageSrc} alt={main} className="w-full h-[60%]" />}
      <div className="flex flex-col w-full  p-4">
      <Typography tag="h2" textColor="black" fontFamily="serif" textSize="lg" textPosition="left">
          {country} - {name.toUpperCase()}
        </Typography>
        <Typography tag="h3" textColor="black" fontFamily="serif" textSize="base" textPosition="left" textSpace="md">
        {calculateCelciusTemp(temp.feels_like)} °C
        </Typography>
        <Typography tag="p" textColor="black" fontFamily="serif" textSize="base" textPosition="left">
          {main}
        </Typography>
        <Typography  tag="p" textColor="black" fontFamily="mono" textSize="base" textPosition="left" textSpace="md">
          {description}
        </Typography>
      </div>
    </div>
  );
};
