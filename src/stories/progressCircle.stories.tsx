import type { Meta, StoryObj } from '@storybook/react';

import { ProgressCircle } from '@/components/ui/progress';

const meta: Meta<typeof ProgressCircle> = {
  title: 'UI/Progress Circle',
  component: ProgressCircle,
  tags: ['autodocs'],
  args: {
    value: 75,
    max: 100,
    strokeSize: 60,
    thickness: 4,
    color: 'primary',
    contrast: 'default',
    label: 'Progress',
    classNames: '',
  },
};

export default meta;

type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {};

export const CircleSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ProgressCircle color="default" strokeSize={40} value={60} />
      <ProgressCircle strokeSize={60} value={60} />
      <ProgressCircle strokeSize={80} value={60} />
      <ProgressCircle strokeSize={100} value={60} />
    </div>
  ),
};

export const CircleThickness: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ProgressCircle thickness={2} value={60} />
      <ProgressCircle thickness={4} value={60} />
      <ProgressCircle thickness={6} value={60} />
      <ProgressCircle thickness={8} value={60} />
    </div>
  ),
};

export const CircleColors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ProgressCircle color="default" value={80} />
      <ProgressCircle color="contrast" value={80} />
      <ProgressCircle color="primary" value={60} />
      <ProgressCircle color="info" value={60} />
      <ProgressCircle color="success" value={60} />
      <ProgressCircle color="warning" value={60} />
      <ProgressCircle color="danger" value={60} />
    </div>
  ),
};
