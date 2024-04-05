import { Weather } from '../../../types/data';
import { Images, ImagesType } from '../../../types/images';
import { calculateCelciusTemp } from '../../../utils/common';
import { Typography } from '../../atoms/typography/typography';

export type WeatherItemType = {
  weatherData: Weather;
  onHandler?: (id: number) => void;
};

export const WeatherItem = ({ weatherData, onHandler }: WeatherItemType) => {

  const {weather, main: temp, name ,sys: {country}} = weatherData;
  const {id,main,description} = weather[0] || {};

  const imageSrc = Images[main as keyof ImagesType];
  return (
    <div
      onClick={() => onHandler && onHandler(id)}
      className="overflow-hidden bg-white flex justify-center align-middle flex-col w-full max-w-[350px] h-[550px] cursor-pointer shadow-xl rounded-xl"
    >
      <img src={imageSrc} alt={main} className="w-full h-[70%]" />
      <div className="flex flex-col w-full  py-8 px-4">
      <Typography tag="h2" textColor="black" fontFamily="serif" textSize="xl" textPosition="left">
          {country} - {name.toUpperCase()}
        </Typography>
        <Typography tag="h3" textColor="black" fontFamily="serif" textSize="xl" textPosition="left" textSpace="md">
        {calculateCelciusTemp(temp.feels_like)} °C
        </Typography>
        <Typography tag="p" textColor="black" fontFamily="serif" textSize="lg" textPosition="left">
          {main}
        </Typography>
        <Typography  tag="p" textColor="black" fontFamily="mono" textSize="lg" textPosition="left">
          {description}
        </Typography>
      </div>
    </div>
  );
};
