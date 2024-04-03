import { ReactNode, memo } from 'react';
import { BGColorVariants } from '../../../constant/colors';
import { ButtonPositionVariants, ButtonSizeVariants } from '../../../constant/size';

type ColorKey = keyof typeof BGColorVariants;
type SizeKey = keyof typeof ButtonSizeVariants;
type Position = keyof typeof ButtonPositionVariants;

export type ButtonProps = {
  children: ReactNode;
  bgColor: ColorKey;
  size: SizeKey;
  position?: Position;
  onClick?: () => void;
};

const getButtonDynamicProps = ({ bgColor, size, position = 'center' }: Omit<ButtonProps, 'children'>) => {
  return [BGColorVariants[bgColor], ButtonSizeVariants[size], ButtonPositionVariants[position]]
    .filter((item) => !!item)
    .join(' ');
};

export const Button = memo<ButtonProps>(({ children, bgColor, size, onClick, position = 'center' }) => {
  return (
    <button
      onClick={() => onClick}
      className={`flex justify-center items-center ${getButtonDynamicProps({
        bgColor,
        size,
        position,
      })} text-white hover:scale-105 transition-all ease-in-out duration-300  hover:cursor-pointer text-md shadow-md  tracking-wider  rounded-md text-center`}
    >
      {children}
    </button>
  );
});
