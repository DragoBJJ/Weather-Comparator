import type { Meta, StoryFn } from '@storybook/react';
import { WeatherItem, WeatherItemType } from '.';

export default {
  title: 'molecules/WeatherItem',
  component: WeatherItem,
} as Meta<typeof WeatherItem>;

const Template: StoryFn<WeatherItemType> = (args) => <WeatherItem {...args} />;

export const Primary = Template.bind({});
