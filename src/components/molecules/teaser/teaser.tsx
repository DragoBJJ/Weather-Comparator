import { memo } from 'react';
import { Button } from '../../atoms/button/button';
import { Typography } from '../../atoms/typography/typography';

export type TeaserProps = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
};

export const Teaser = memo<TeaserProps>(({ title, description, buttonText, imageSrc = '' }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  m-auto  w-full max-w-[1440px]  h-[880px] md:h-[480px] bg-ecru rounded-2xl shadow-lg overflow-hidden">
      <div className="flex w-full h-full ">
        <img src={imageSrc} alt={title} className="flex w-full h-full" />
      </div>
      <div className="flex flex-col h-full w-full justify-center  p-12">
        <div className="flex flex-col w-full">
          <Typography tag="h5" textColor="black" textSize="5xl" fontFamily="sans" textPosition="left">
            {title}
          </Typography>
          <Typography tag="p" textColor="black" textSize="base" fontFamily="serif" textPosition="left" >
            {description}
          </Typography>
          <Button bgColor="red" size="large" position="left">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
});
