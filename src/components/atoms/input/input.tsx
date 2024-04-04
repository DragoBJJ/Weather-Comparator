/* eslint-disable react/display-name */
import { memo } from 'react';
import { InputLoginType, InputSizeVariants } from '../../../constant/size';
import { firstLetterUpperCase } from '../../../utils/common';

type SizeKey = keyof typeof InputSizeVariants;
type InpuTypeKey = keyof typeof InputLoginType;

export type InputProps = {
  placeholder: string;
  size: SizeKey;
  type: InpuTypeKey
  setValue?: React.Dispatch<React.SetStateAction<string>>
};

export const Input = memo<InputProps>(({ type,placeholder, size, setValue }) => {
  return (
    <input
      type={type}
      onChange={(e)=>setValue && setValue(e.target.value)}
      placeholder={firstLetterUpperCase(placeholder)}
      className={`${InputSizeVariants[size]} placeholder-gray-700 text-black placeholder-opacity-75 hover:bg-cashmere focus:bg-cashmere outline-none border-[1px] transition-all ease-in-out duration-100 border-cashmere focus:border-cashmere content-center hover:cursor-pointer pl-4  text-md shadow-md tracking-wider  rounded-3xl  `}
    />
  );
});
