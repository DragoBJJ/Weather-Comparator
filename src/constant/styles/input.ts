export const ButtonSizeVariants = {
  small: ' w-40 h-10',
  medium: 'w-44 h-12',
  large: 'w-48 h-12',
} as const;

export const ButtonPositionVariants = {
  left: ' mr-auto',
  right: 'ml-auto',
  center: 'mx-auto',
} as const;

export const InputSizeVariants = {
  small: ' h-12 w-70',
  medium: 'h-14 w-96',
} as const;

export const SelectSizeVariants = {
  small: ' h-10 w-60',
  medium: 'h-10 w-70',
} as const;

export const InputBorderVariants = {
  oceanBlue: 'border-[1px]  border-solid border-oceanBlue',
  red: 'border-[1px] border-solid border-primaryRed',
} as const;

export const InputLoginType = {
  email: 'email',
  password: 'password',
  text: 'text',
} as const;
