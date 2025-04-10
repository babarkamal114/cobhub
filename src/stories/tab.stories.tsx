import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TrackTabs } from 'ui-components';

const categories = {
  'Tab 1': ['Content 1-A', 'Content 1-B', 'Content 1-C'],
  'Tab 2': ['Content 2-A', 'Content 2-B', 'Content 2-C'],
  'Tab 3': ['Content 3-A', 'Content 3-B', 'Content 3-C'],
};

const renderItem = (item: string, index: number): React.ReactNode => {
  return (
    <div key={index} className="p-4 border rounded bg-gray-50 mb-2">
      {item}
    </div>
  );
};

const meta: Meta<typeof TrackTabs<string>> = {
  title: 'UI/Tabs',
  component: TrackTabs,
  tags: ['autodocs'],

  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: ['smooth', 'straight', 'rounded', 'curved', 'full'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TrackTabs<string>>;

export const Smooth: Story = {
  args: {
    categories,
    renderItem,
    keyExtractor: (item: string) => item,
    shape: 'smooth',
    aria: { label: 'Smooth Shape Tabs' },
  },
};

export const Straight: Story = {
  args: {
    ...Smooth.args,
    shape: 'straight',
    aria: { label: 'Straight Shape Tabs' },
  },
};

export const Rounded: Story = {
  args: {
    ...Smooth.args,
    shape: 'rounded',
    aria: { label: 'Rounded Shape Tabs' },
  },
};

export const Curved: Story = {
  args: {
    ...Smooth.args,
    shape: 'curved',
    aria: { label: 'Curved Shape Tabs' },
  },
};

export const Full: Story = {
  args: {
    ...Smooth.args,
    shape: 'full',
    aria: { label: 'Full Shape Tabs' },
  },
};
