import type { Meta, StoryObj } from '@storybook/react';

import { ToggleBox } from 'ui-components';

const meta: Meta<typeof ToggleBox> = {
  component: ToggleBox,
  title: 'UI/ToggleBox',
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    growOnExpand: { control: 'boolean' },
    spaced: { control: 'boolean' },
    isToggle: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleBox>;

export const Default: Story = {
  args: {
    title: 'Toggle Box Title',
    children: <p>This is the content inside the toggle box.</p>,
    isToggle: true,
    open: false,
    color: 'default',
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4">
      {['straight', 'rounded', 'smooth', 'curved', 'full'].map(shape => (
        <ToggleBox key={shape} title={`Shape: ${shape}`} shape={shape as any} isToggle>
          <p>Shape {shape} content</p>
        </ToggleBox>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4">
      {['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'].map(
        color => (
          <ToggleBox key={color} title={`Color: ${color}`} color={color as any} isToggle>
            <p>Color {color} content</p>
          </ToggleBox>
        )
      )}
    </div>
  ),
};

export const GrowOnExpand: Story = {
  args: {
    title: 'Expands with Padding',
    children: (
      <div>
        <p>Content appears with extra padding when expanded.</p>
        <p>Useful for smoother layout transitions.</p>
      </div>
    ),
    growOnExpand: true,
    isToggle: true,
    color: 'default',
  },
};

export const CustomContent: Story = {
  args: {
    header: (
      <div className="flex items-center gap-2">
        <span className="text-primary-600 font-semibold">Custom Header</span>
        <span className="text-sm text-muted-500">With extra info</span>
      </div>
    ),
    children: (
      <div className="grid gap-2">
        <p>You can render any custom JSX inside this box.</p>
        <ul className="list-disc list-inside text-sm text-muted-700">
          <li>Forms</li>
          <li>Tables</li>
          <li>Cards</li>
        </ul>
      </div>
    ),
    isToggle: true,
    open: true,
    color: 'default',
  },
};
