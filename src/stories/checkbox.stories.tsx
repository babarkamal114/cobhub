import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from 'ui-components';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'UI/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'contrast', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    shape: {
      control: 'select',
      options: ['smooth', 'rounded', 'curved', 'full'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    label: 'Default Checkbox',
    color: 'default',
    shape: 'smooth',
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {['smooth', 'rounded', 'curved', 'full'].map(shape => (
        <Checkbox
          key={shape}
          id={`checkbox-${shape}`}
          label={`Shape: ${shape}`}
          shape={shape as any}
        />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {['default', 'contrast', 'primary', 'info', 'success', 'warning', 'danger'].map(color => (
        <Checkbox
          key={color}
          id={`checkbox-${color}`}
          label={`Color: ${color}`}
          color={color as any}
        />
      ))}
    </div>
  ),
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'Disabled Checkbox',
    disabled: true,
  },
};
