import type { Meta, StoryObj } from '@storybook/react';

import { RangeSlider } from 'ui-components';

const meta: Meta<typeof RangeSlider> = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  args: {
    value: 50,
    onSliderChange: (val: number) => console.log('Slider value:', val),
  },
};

export default meta;

type Story = StoryObj<typeof RangeSlider>;

export const Colors: Story = {
  render: args => (
    <div className="flex flex-col gap-10 items-center py-10">
      <RangeSlider color="default" {...args} />
      <RangeSlider color="contrast" {...args} />
      <RangeSlider color="muted" {...args} />
      <RangeSlider color="primary" {...args} />
      <RangeSlider color="success" {...args} />
      <RangeSlider color="warning" {...args} />
      <RangeSlider color="danger" {...args} />
    </div>
  ),
};

export const WithLegend: Story = {
  args: {
    legend: true,
  },
};

export const WithoutLegend: Story = {
  args: {
    legend: false,
  },
};

export const CustomRange: Story = {
  args: {
    min: 10,
    max: 90,
    legend: true,
  },
};

export const InvertedSlider: Story = {
  args: {
    invert: true,
    legend: true,
  },
};

export const WithPrefix: Story = {
  args: {
    legend: true,
    valuePrefix: '$',
  },
};

export const WithSuffix: Story = {
  args: {
    legend: true,
    valueSuffix: '%',
  },
};

export const WithSteps: Story = {
  args: {
    steps: [0, 25, 50, 75, 100],
    legend: true,
  },
};

export const VerticalSlider: Story = {
  args: {
    orientation: 'vertical',
    legend: true,
  },
};
