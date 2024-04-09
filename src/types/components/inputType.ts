import {
  InputBorderVariants,
  InputLoginType,
  InputSizeVariants,
} from '../../constant/styles/input';

export type SizeKey = keyof typeof InputSizeVariants;
export type InpuTypeKey = keyof typeof InputLoginType;
export type InpuBorderKey = keyof typeof InputBorderVariants;
