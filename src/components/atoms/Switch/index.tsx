import { Dispatch, SetStateAction, memo } from 'react';
import { KeyboardType, keyOptions } from '../../../types/eventType';


type SwitchType<T extends string> = {
  label: string;
  values: T[],
  stateValue: T;
  setStateValue: Dispatch<SetStateAction<T>>;
};

 function Switch<T extends string>({
  values,
  stateValue,
  label,
  setStateValue,
}: SwitchType<T>) {
    const switchDynamicStyle = `bg-oceanBlue translate-x-[25px] border-green ml-auto`;
    const isFirstValue = stateValue === values[0];

    console.log("isFirstValue", isFirstValue)

    const handleKeyDown =(e: KeyboardType) => {
        if(keyOptions[e.code])  {
          const handleValue = isFirstValue ? values[1]: values[0];
            setStateValue(handleValue);
        }
    }
const hoverStyle = `hover:scale-[1.10] transition duration-300 ease-in-out`;
  return (
<div role="switch" aria-checked={isFirstValue} onKeyDown={(e)=> handleKeyDown(e)} tabIndex={0} className='flex hover:outline-none bg-oceanBlue text-white focus:outline-none focus:border-bg-oceanBlue  focus:cursor-pointer justify-center items-center border-[1px] rounded-lg border-[#005a9c] p-4 w-full max-w-[320px] h-[48px]  select-none'>
<span className="label m-4 w-[8em] w-[200px]">{label}</span>
  <span className={`flex mx-2 justify-center items-center relative inline-block t-[6px] border-[1px] border-solid border-oceanBlue bg-white rounded-xl h-[20px] w-12`}>
    <span className={`absolute inline-block top-[2px] left-[2px] easy-in-out duration-300 rounded-lg h-[12px] w-[12px] ${isFirstValue ? switchDynamicStyle: " bg-primaryRed"}`}></span>
  </span>
<div className='flex w-20' aria-hidden="true">
  <span onClick={()=> setStateValue(values[1])} className={`cursor-pointer ${isFirstValue ? "inline ": "hidden"} ${hoverStyle}`} aria-hidden="true">{values[0]}</span>
  <span onClick={()=> setStateValue(values[0])} className={`cursor-pointer ${isFirstValue ? "hidden": "inline"} ${hoverStyle}`} aria-hidden="true">{values[1]}</span>
</div>
</div>
  );
}

export default memo(Switch) as typeof Switch;
