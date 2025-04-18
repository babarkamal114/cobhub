import type { Meta, StoryObj } from '@storybook/react';

import { Select } from 'ui-components';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    loading: { control: 'boolean' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
  },
  args: {
    label: 'Select',
    options: ['Option 1', 'Option 2', 'Option 3'],
    size: 'md',
    loading: false,
    error: '',
    required: false,
    disabled: false,
    icon: '',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Choose a fruit',
    options: ['Apple', 'Banana', 'Orange'],
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <Select label="Straight" shape="straight" options={['One', 'Two']} />
      <Select label="Rounded" shape="rounded" options={['One', 'Two']} />
      <Select label="Smooth" shape="smooth" options={['One', 'Two']} />
      <Select label="Curved" shape="curved" options={['One', 'Two']} />
      <Select label="Full" shape="full" options={['One', 'Two']} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <Select label="Small" size="sm" options={['One', 'Two']} />
      <Select label="Medium" size="md" options={['One', 'Two']} />
      <Select label="Large" size="lg" options={['One', 'Two']} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-row flex-wrap gap-4">
      <Select label="Default" color="default" options={['One', 'Two']} />
      <Select label="Contrast" color="contrast" options={['One', 'Two']} />
      <Select label="Muted" color="muted" options={['One', 'Two']} />
      <Select label="Primary" color="primary" options={['One', 'Two']} />
      <Select label="Success" color="success" options={['One', 'Two']} />
      <Select label="Warning" color="warning" options={['One', 'Two']} />
      <Select label="Danger" color="danger" options={['One', 'Two']} />
      <Select label="Danger" color="info" options={['One', 'Two']} />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: 'mdi:fruit-cherries',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'This field is required',
    required: true,
  },
};
