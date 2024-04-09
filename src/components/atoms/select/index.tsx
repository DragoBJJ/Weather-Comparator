
import { memo } from 'react';
import { InputBorderVariants, SelectSizeVariants } from '../../../constant/styles/input';
import { InpuBorderKey, SizeKey } from '../../../types/components/inputType';
import { mapDictValueToOption } from '../../../utils/common';

 type SelectProps<T extends Record<string,string>> = {
  title: string
  size: SizeKey;
  border?: InpuBorderKey
  items: T
  handleValue?: (key: string) => void
};

function Select<T extends Record<string, string>>({ items, title, border, size, handleValue }: SelectProps<T>) {
  return (
   <div className='flex flex-col max-w-[280px]'>
    <label htmlFor="weatherData" className=' pl-2 text-oceanBlue'>{title}</label>
     <select
      id='weatherData'
      onChange={(e)=> handleValue && handleValue(e.target.value)}
      className={`${SelectSizeVariants[size]} ${border ? InputBorderVariants[border]: ""} pl-4 mt-4 text-black outline-none border-[1px] transition-all ease-in-out duration-100 border-cashmere  content-center hover:cursor-pointer text-md shadow-md tracking-wider  rounded-2xl`}
    >
      {mapDictValueToOption(items)}
    </select>
   </div>
  );
}

  const genericMemo: <T>(component: T)=> T = memo;
  export const SelectInput = genericMemo(Select);
