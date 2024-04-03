import { createElement, memo } from 'react';
import { TextBGColorVariants } from '../../../constant/colors';
import { FontSize, FontStyle } from '../../../constant/typography';
import { TypographyDynamicProps, TypographyProps } from '../../../types/typography';

const DynamicTypography = memo<TypographyDynamicProps>(({ tag = 'p', children, ...props }) =>
  createElement(tag, props, children),
);

export const Typography = memo<TypographyProps>(({ tag, children, ...props }) => {
  const { textColor, textSize, fontFamily } = props;
  return (
    <DynamicTypography
      tag={tag}
      className={`${TextBGColorVariants[textColor]} ${FontSize[textSize]} ${FontStyle[fontFamily]}`}
    >
      {children}
    </DynamicTypography>
  );
});
