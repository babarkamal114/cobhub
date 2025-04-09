import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Heart, Settings } from 'lucide-react';

import { IconButton } from 'ui-components';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'pastel', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Default Story
export const Default: Story = {
  args: {
    children: <Mail size={20} />,
    variant: 'solid',
    color: 'primary',
    size: 'md',
    shape: 'rounded',
    loading: false,
  },
};

export const WithLoading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
    children: <Heart size={20} />,
  },
};

export const Pastel: Story = {
  args: {
    ...Default.args,
    variant: 'pastel',
    children: <Settings size={20} />,
  },
};

export const Sizes: Story = {
  args: {
    children: <Mail size={20} />,
    size: 'md',
  },
};

export const Shapes: Story = {
  args: {
    children: <Mail size={20} />,
    shape: 'rounded',
  },
};

export const Colors: Story = {
  args: {
    children: <Mail size={20} />,
    color: 'primary',
  },
};
