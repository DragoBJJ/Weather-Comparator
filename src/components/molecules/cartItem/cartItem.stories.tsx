import type { Meta, StoryFn } from '@storybook/react';
import imageCard from '../../../public/images/custom.jpg';
import { CartItem, CartItemType } from './cartItem';

export default {
  title: 'molecules/CarItem',
  component: CartItem,
} as Meta<typeof CartItem>;

const Template: StoryFn<CartItemType> = (args) => <CartItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: 1,
  itemName: 'Modern Noris corner sofa',
  price: '2000',
  currency: 'PLN',
  imageSrc: imageCard,
};
