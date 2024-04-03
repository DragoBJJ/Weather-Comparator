import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} >Sign In</Button>

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Third = Template.bind({});

Primary.args = {
  bgColor: 'cashmere',
  size: 'small',
};

Secondary.args = {
  bgColor: 'blue',
  size: 'medium',
};

Third.args = {
  bgColor: 'red',
  size: 'large',
};
