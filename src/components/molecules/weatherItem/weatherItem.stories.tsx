import type { Meta, StoryFn } from '@storybook/react';
import { WeatherItem, WeatherItemType } from '.';
import imageCard from '../../../public/images/custom.jpg';

export default {
  title: 'molecules/WeatherItem',
  component: WeatherItem,
} as Meta<typeof WeatherItem>;

const Template: StoryFn<WeatherItemType> = (args) => <WeatherItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: 1,
  itemName: 'Modern Noris corner sofa',
  price: '2000',
  currency: 'PLN',
  imageSrc: imageCard,
};
