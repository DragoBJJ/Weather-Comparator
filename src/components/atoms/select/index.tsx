/* eslint-disable react/display-name */
import { Dispatch, SetStateAction, memo } from 'react';
import { InputBorderVariants, SelectSizeVariants } from '../../../constant/styles/input';
import { InpuBorderKey, SizeKey } from '../../../types/input';

 type SelectProps<T extends string> = {
  size: SizeKey;
  border?: InpuBorderKey
  items: T[]
  value: string
  setValue: Dispatch<SetStateAction<string>>
};

function Select<T extends string>({ items, value, border, size, setValue }: SelectProps<T>) {
  return (
    <select
      onChange={(e)=> setValue(e.target.value)}
      value={value}
      className={`${SelectSizeVariants[size]} ${border ? InputBorderVariants[border]: ""} pl-4 mt-4 text-black outline-none border-[1px] transition-all ease-in-out duration-100 border-cashmere  content-center hover:cursor-pointer text-md shadow-md tracking-wider  rounded-2xl`}
    >
      {items.length  ? items.map((item)=> {
        return (
          <option key={item} value={item}>{item}</option>
        )
      }): <></>}
    </select>
  );
}

  const genericMemo: <T>(component: T)=> T = memo;
  export const SelectInput = genericMemo(Select);
