/* eslint-disable react/display-name */
import { memo } from 'react';
import { InputLoginVariants, InputSizeVariants } from '../../../constant/size';
import { firstLetterUpperCase } from '../../../utils/common';

type SizeKey = keyof typeof InputSizeVariants;
type InpuTypeKey = keyof typeof InputLoginVariants;

export type InputProps = {
  placeholder: InpuTypeKey;
  size: SizeKey;
};

export const Input = memo<InputProps>(({ placeholder, size }) => {
  return (
    <input
      placeholder={firstLetterUpperCase(placeholder)}
      type={placeholder}
      className={`${InputSizeVariants[size]} placeholder-gray-700 text-black placeholder-opacity-75 hover:bg-cashmere focus:bg-cashmere outline-none border-[1px] transition-all ease-in-out duration-100 border-cashmere focus:border-cashmere content-center hover:cursor-pointer pl-4  text-md shadow-md tracking-wider  rounded-3xl  `}
    />
  );
});
