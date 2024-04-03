import { createElement } from 'react';
import { TextBGColorVariants } from '../../../constant/colors';
import { FontSize, FontStyle, TypographyPosition, TypographySpace } from '../../../constant/typography';
import { BasicTypographyProps, DynamicTypographyProps, TypographyProps } from '../../../types/typography';

const DynamicTypography = ({ tag = 'p', children, ...props }: BasicTypographyProps) => {
  return createElement(tag, props, children);
};

const getTypographyDynamicProps = ({
  textColor,
  textSize,
  textPosition,
  fontFamily = 'sans',
  textSpace = 'default',
}: DynamicTypographyProps) => {
  const classNames = [
    TextBGColorVariants[textColor],
    FontSize[textSize],
    FontStyle[fontFamily],
    TypographyPosition[textPosition],
    TypographySpace[textSpace],
  ]
    .filter((item) => !!item)
    .join(' ');

  return `${classNames}`;
};

export const Typography = ({ tag, children, ...props }: TypographyProps) => {
  const { textColor, textSize, textPosition, className, textSpace = 'default', fontFamily = 'serif' } = props;
  const dynamicClassName = getTypographyDynamicProps({
    textColor,
    textSize,
    textPosition,
    textSpace,
    fontFamily,
  })
  return (
    <DynamicTypography tag={tag} className={`${className ? className : ''} ${dynamicClassName }`}>
      {children}
    </DynamicTypography>
  );
};
