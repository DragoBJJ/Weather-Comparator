import { memo } from 'react';
import { BGColorVariants } from '../../../constant/colors';
import { ButtonSizeVariants } from '../../../constant/size';

type ColorKey = keyof typeof BGColorVariants;
type SizeKey = keyof typeof ButtonSizeVariants;

export type ButtonProps = {
  text: string;
  bgColor: ColorKey;
  size: SizeKey;
};

export const Button = memo<ButtonProps>(({ text, bgColor, size }) => {
  return (
    <button
      className={`${BGColorVariants[bgColor]} ${ButtonSizeVariants[size]} text-white hover:scale-105 transition-all ease-in-out duration-300  content-center hover:cursor-pointer text-md shadow-md  tracking-wider  rounded-md  text-center`}
    >
      {text}
    </button>
  );
});
