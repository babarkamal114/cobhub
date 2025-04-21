import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ToggleSwitch } from 'ui-components';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'UI/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'success', 'info', 'warning', 'danger'],
    },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    sublabel: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: args => {
    const [checked, setChecked] = useState(args.checked || false);

    return <ToggleSwitch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  args: {
    label: 'Enable Notifications',
    checked: false,
  },
};

export const SubLabel: Story = {
  args: {
    label: 'Color Variants',
    sublabel: 'This is a sublabel',
    checked: true,
  },
};

export const Colors: Story = {
  args: {
    label: 'Color Variants',
    checked: true,
  },
  render: args => (
    <div className="flex flex-col gap-4">
      <ToggleSwitch {...args} color="default" />
      <ToggleSwitch {...args} color="contrast" />
      <ToggleSwitch {...args} color="muted" />
      <ToggleSwitch {...args} color="primary" />
      <ToggleSwitch {...args} color="success" />
      <ToggleSwitch {...args} color="info" />
      <ToggleSwitch {...args} color="warning" />
      <ToggleSwitch {...args} color="danger" />
    </div>
  ),
};
