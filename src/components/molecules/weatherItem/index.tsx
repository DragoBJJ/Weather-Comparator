import { Weather } from '../../../types/data';
import { calculateCelciusTemp } from '../../../utils/common';
import { Button } from '../../atoms/button/button';
import { Typography } from '../../atoms/typography/typography';

export type WeatherItemType = {
  weatherData: Weather;
  onHandler?: (id: number) => void;
};

export const WeatherItem = ({ weatherData, onHandler }: WeatherItemType) => {

  const {weather, main: temp, name ,sys: {country}} = weatherData;
  const {id,main,description, icon} = weather[0] || {};

  return (
    <div
      onClick={() => onHandler && onHandler(id)}
      className="overflow-hidden p-4 flex justify-center align-middle flex-col w-full max-w-[450px] h-[660px] cursor-pointer shadow-xl rounded-xl"
    >
      <img src={icon} alt={main} className="w-full h-full" />
      <div className="flex flex-col w-full justify-center  content-center py-4 px-2">
      <Typography tag="h2" textColor="black" fontFamily="serif" textSize="xl" textPosition="left">
          {country} - {name.toUpperCase()}
        </Typography>
        <Typography tag="h3" textColor="black" fontFamily="serif" textSize="xl" textPosition="left">
          {calculateCelciusTemp(temp.feels_like)}
        </Typography>
        <Typography tag="p" textColor="black" fontFamily="serif" textSize="lg" textPosition="left">
          {main}
        </Typography>
        <Typography  tag="p" textColor="black" fontFamily="mono" textSize="lg" textPosition="left" textSpace="md">
          {description}
        </Typography>
        <Button size="small" bgColor="blue">
        Add To Cart
        </Button>


      </div>
    </div>
  );
};
