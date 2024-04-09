import type { Meta, StoryFn } from '@storybook/react';
import { PollutionItem } from '.';
import { PollutionApiData } from '../../../types/pollutionData';

export default {
  title: 'molecules/PolutionItem',
  component: PollutionItem,
} as Meta<typeof PollutionItem>;

const Template: StoryFn<PollutionApiData> = (args) => <PollutionItem {...args} />;

export const Primary = Template.bind({});
