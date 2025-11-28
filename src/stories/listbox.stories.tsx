'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ListBox } from '@/components/ui/form/listbox';
import { ListBoxItems } from '@/types/components';

const meta: Meta<typeof ListBox> = {
  title: 'UI/ListBox',
  component: ListBox,
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
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled', 'loading'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    bordered: { control: 'boolean' },
    multiple: { control: 'boolean' },
    error: { control: 'text' },
  },
  args: {
    label: 'Select a user',
    size: 'md',
    shape: 'smooth',
    variant: 'default',
    loading: false,
    disabled: false,
    bordered: true,
    multiple: false,
    error: '',
  },
};

export default meta;

type Story = StoryObj<typeof ListBox>;

// Sample data for stories
const sampleItems: ListBoxItems[] = [
  { id: '1', name: 'Wade Cooper', icon: 'lucide:user' },
  { id: '2', name: 'Arlene Mccoy', icon: 'lucide:user-check' },
  { id: '3', name: 'Devon Webb', icon: 'lucide:user-plus' },
  { id: '4', name: 'Tom Cook', icon: 'lucide:users' },
  { id: '5', name: 'Tanya Fox', icon: 'lucide:user-circle' },
];

const sampleItemsWithImages: ListBoxItems[] = [
  { id: '1', name: 'Wade Cooper', image: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Arlene Mccoy', image: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Devon Webb', image: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Tom Cook', image: 'https://i.pravatar.cc/150?img=4' },
];

// Wrapper component for state management
const ListBoxWrapper = (args: any) => {
  const [selected, setSelected] = useState<ListBoxItems | null>(null);

  return (
    <div className="w-full max-w-md">
      <ListBox
        {...args}
        selected={selected}
        setSelected={setSelected}
        items={args.items || sampleItems}
      />
      {selected && (
        <p className="mt-4 text-sm text-muted-600 dark:text-muted-400">
          Selected: <strong>{selected.name}</strong>
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: args => <ListBoxWrapper {...args} />,
  args: {
    label: 'Choose a user',
    items: sampleItems,
  },
};

export const WithImages: Story = {
  render: args => <ListBoxWrapper {...args} />,
  args: {
    label: 'Choose a team member',
    items: sampleItemsWithImages,
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ListBoxWrapper label="Straight" shape="straight" />
      <ListBoxWrapper label="Rounded" shape="rounded" />
      <ListBoxWrapper label="Smooth" shape="smooth" />
      <ListBoxWrapper label="Curved" shape="curved" />
      <ListBoxWrapper label="Full" shape="full" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ListBoxWrapper label="Small" size="sm" />
      <ListBoxWrapper label="Medium" size="md" />
      <ListBoxWrapper label="Large" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ListBoxWrapper label="Default" variant="default" />
      <ListBoxWrapper label="Success" variant="success" />
      <ListBoxWrapper label="Error" variant="error" />
    </div>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ListBoxWrapper label="With Border" bordered />
      <ListBoxWrapper label="Without Border" bordered={false} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ListBoxWrapper label="Normal" />
      <ListBoxWrapper label="Disabled" disabled />
      <ListBoxWrapper label="Loading" loading />
    </div>
  ),
};

export const WithError: Story = {
  render: args => <ListBoxWrapper {...args} />,
  args: {
    error: 'Please select a valid option',
    variant: 'error',
  },
};

export const NoItems: Story = {
  render: args => <ListBoxWrapper {...args} />,
  args: {
    label: 'Empty list',
    items: [],
  },
};

export const Playground: Story = {
  render: args => <ListBoxWrapper {...args} />,
  args: {
    label: 'Playground ListBox',
    items: sampleItems,
    size: 'md',
    shape: 'smooth',
    variant: 'default',
    bordered: true,
  },
};
