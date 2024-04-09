import { ReactNode } from 'react';
import { TextBGColorVariants } from '../../constant/styles/colors';
import {
  FontSize,
  FontStyle,
  TypographyPosition,
  TypographySpace,
} from '../../constant/styles/typography';

export type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'cite';

export type TextColorVariants = keyof typeof TextBGColorVariants;
export type TextSizeVariants = keyof typeof FontSize;
export type TextPosition = keyof typeof TypographyPosition;
export type TextSpace = keyof typeof TypographySpace;
export type FontFamilyVariants = keyof typeof FontStyle;

export type BasicTypographyProps = {
  tag: TagVariants;
  children: ReactNode;
  className?: string;
};

export type DynamicTypographyProps = {
  textColor: TextColorVariants;
  textSize: TextSizeVariants;
  fontFamily?: FontFamilyVariants;
  textPosition: TextPosition;
  textSpace?: TextSpace;
};

export type TypographyProps = BasicTypographyProps & DynamicTypographyProps;
