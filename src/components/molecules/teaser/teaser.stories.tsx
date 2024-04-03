import type { Meta, StoryFn } from '@storybook/react';
import Image from '../../../public/images/custom.jpg';
import { Teaser, TeaserProps } from './teaser';

export default {
  title: 'molecules/Teaser',
  component: Teaser,
} as Meta<typeof Teaser>;

const Template: StoryFn<TeaserProps> = (args) => <Teaser {...args} />;

export const Primary = Template.bind({});


Primary.args = {
  title: 'ABOUT US',
  buttonText: 'ABOUT US',
  description:
    'Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis',
  imageSrc: Image,
};
