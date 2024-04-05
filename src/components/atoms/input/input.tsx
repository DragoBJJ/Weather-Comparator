/* eslint-disable react/display-name */
import { memo } from 'react';
import { InputBorderVariants, InputSizeVariants } from '../../../constant/input';
import { InpuBorderKey, InpuTypeKey, SizeKey } from '../../../types/input';
import { firstLetterUpperCase } from '../../../utils/common';

export type InputProps = {
  placeholder: string;
  size: SizeKey;
  type: InpuTypeKey
  border?: InpuBorderKey
  setValue?: React.Dispatch<React.SetStateAction<string>>
  value: string;
};

export const Input = memo<InputProps>(({ type,value, border, placeholder, size, setValue }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e)=>setValue && setValue(e.target.value)}
      placeholder={firstLetterUpperCase(placeholder)}
      className={`${InputSizeVariants[size]} ${border ? InputBorderVariants[border]: ""} placeholder-gray-700 text-black placeholder-opacity-75 outline-none border-[1px] transition-all ease-in-out duration-100 border-cashmere  content-center hover:cursor-pointer pl-4  text-md shadow-md tracking-wider  rounded-3xl  `}
    />
  );
});
