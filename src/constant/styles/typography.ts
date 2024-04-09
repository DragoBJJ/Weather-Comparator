export const FontSize = {
  sm: 'text-xs',
  base: 'text-sm sm:text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-lg md:text-xl lg:text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
} as const;

export const FontStyle = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
} as const;

export const TypographyPosition = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

export const TypographySpace = {
  default: 'my-0',
  sm: 'my-1',
  md: 'my-2',
  lg: 'my-3',
} as const;
