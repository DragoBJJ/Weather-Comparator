import { ReactNode, memo } from 'react';
import { BGColorVariants } from '../../../constant/colors';
import { ButtonPositionVariants, ButtonSizeVariants } from '../../../constant/size';

type ColorKey = keyof typeof BGColorVariants;
type SizeKey = keyof typeof ButtonSizeVariants;
type Position = keyof typeof ButtonPositionVariants;

export type ButtonProps = {
  children: ReactNode;
  btnHandler?: () => void;
  bgColor: ColorKey;
  size: SizeKey;
  position?: Position;
};

const getButtonDynamicProps = ({ bgColor, size, position = 'center' }: Omit<ButtonProps, 'children' | "onClick">) => {
  return [BGColorVariants[bgColor], ButtonSizeVariants[size], ButtonPositionVariants[position]]
    .filter((item) => !!item)
    .join(' ');
};

export const Button = memo<ButtonProps>(({ children, btnHandler, bgColor, size, position = 'center' }) => {

  return (
    <button
         onClick={btnHandler}
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
