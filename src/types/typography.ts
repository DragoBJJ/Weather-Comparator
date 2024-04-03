import { ReactNode } from 'react';
import { TextBGColorVariants } from '../constant/colors';
import { FontSize, FontStyle } from '../constant/typography';

export type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'cite';

export type TextColorVariants = keyof typeof TextBGColorVariants;
export type TextSizeVariants = keyof typeof FontSize;
export type FontFamilyVariants = keyof typeof FontStyle;

export type BasicTypography = {
  tag: TagVariants;
  children: ReactNode;
};

export type TypographyProps = {
  textColor: TextColorVariants;
  textSize: TextSizeVariants;
  fontFamily: FontFamilyVariants;
} & BasicTypography;

export type TypographyDynamicProps = {
  className: string;
} & BasicTypography;
