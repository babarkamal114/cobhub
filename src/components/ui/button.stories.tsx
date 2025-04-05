import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
  },
};

export const Pastel: Story = {
  args: {
    children: 'Button',
    variant: 'pastel',
    color: 'primary',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    variant: 'solid',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'solid',
    color: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
    loadingText: 'Loading...',
    variant: 'solid',
    color: 'primary',
  },
}; 