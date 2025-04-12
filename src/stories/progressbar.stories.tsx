import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '@/components/ui/progress';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    max: 100,
    value: 60,
    label: 'Progress',
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar size="sm" value={40} />
      <ProgressBar size="xs" value={50} />
      <ProgressBar size="md" value={80} />
      <ProgressBar size="lg" value={80} />
      <ProgressBar size="xl" value={80} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar color="primary" value={50} />
      <ProgressBar color="info" value={50} />
      <ProgressBar color="success" value={50} />
      <ProgressBar color="warning" value={50} />
      <ProgressBar color="danger" value={50} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="w-64 flex flex-col space-y-4">
      <ProgressBar />
      <ProgressBar color="info" />
      <ProgressBar color="success" />
      <ProgressBar color="warning" />
      <ProgressBar color="danger" />
    </div>
  ),
};
