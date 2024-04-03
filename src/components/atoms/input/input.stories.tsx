import type { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  placeholder: 'password',
  size: 'small',
};

Secondary.args = {
  placeholder: 'email',
  size: 'medium',
};
