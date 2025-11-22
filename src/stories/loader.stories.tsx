import { type Meta, type StoryObj } from '@storybook/react';

import { Loader } from 'ui-components';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxs', 'xxxs'],
    },
    thickness: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxs', 'xxxs'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'primary', 'info', 'success', 'warning', 'danger', 'muted'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: 'md',
    thickness: 'md',
    color: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loader size="xxxs" color="primary" />
      <Loader size="xxs" color="primary" />
      <Loader size="xs" color="primary" />
      <Loader size="sm" color="primary" />
      <Loader size="md" color="primary" />
      <Loader size="lg" color="primary" />
      <Loader size="xl" color="primary" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loader size="lg" thickness="xxxs" color="primary" />
      <Loader size="lg" thickness="xxs" color="primary" />
      <Loader size="lg" thickness="xs" color="primary" />
      <Loader size="lg" thickness="sm" color="primary" />
      <Loader size="lg" thickness="md" color="primary" />
      <Loader size="lg" thickness="lg" color="primary" />
      <Loader size="lg" thickness="xl" color="primary" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loader size="lg" color="default" />
      <Loader size="lg" color="contrast" />
      <Loader size="lg" color="primary" />
      <Loader size="lg" color="info" />
      <Loader size="lg" color="success" />
      <Loader size="lg" color="warning" />
      <Loader size="lg" color="danger" />
      <Loader size="lg" color="muted" />
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    thickness: 'xs',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    thickness: 'lg',
    color: 'success',
  },
};

export const InButton: Story = {
  render: () => (
    <button className="flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-white">
      <Loader size="sm" thickness="xs" color="contrast" />
      Loading...
    </button>
  ),
};
