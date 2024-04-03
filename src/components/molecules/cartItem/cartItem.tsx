import { Button } from '../../atoms/button/button';
import { Typography } from '../../atoms/typography/typography';

export type CartItemType = {
  id: number;
  itemName: string;
  imageSrc: string;
  price: string;
  currency: string;
  onClick?: (id: CartItemType['id']) => void;
};

export const CartItem = ({ itemName, imageSrc = '', price, currency, id, onClick }: CartItemType) => {
  return (
    <div
      onClick={() => onClick && onClick(id)}
      className="overflow-hidden flex justify-center align-middle flex-col w-full max-w-[450px] h-[660px] cursor-pointer shadow-xl rounded-xl"
    >
      <img src={imageSrc} alt={itemName} className="w-full h-full" />
      <div className="flex flex-col w-full justify-center  content-center py-4 px-2">
        <Typography tag="p" textColor="black" fontFamily="serif" textSize="xl" textPosition="left">
          {itemName.toUpperCase()}
        </Typography>
        <Typography  tag="p" textColor="black" fontFamily="mono" textSize="xl" textPosition="left" textSpace="md">
          {price} {currency}
        </Typography>
        <Button size="small" bgColor="blue">
        Add To Cart
        </Button>


      </div>
    </div>
  );
};
