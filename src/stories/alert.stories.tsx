import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from 'ui-components';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'contrast',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'violet',
      ],
    },
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    icon: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    dismissible: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    label: 'This is an alert message.',
    color: 'default',
    shape: 'smooth',
    icon: 'lucide:info',
    dismissible: true,
  },
};

export const Shapes: Story = {
  args: {
    label: 'This is an alert message.',
    color: 'default',
    dismissible: true,
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Alert {...args} shape="straight" label="Shape: Straight" />
      <Alert {...args} shape="rounded" label="Shape: Rounded" />
      <Alert {...args} shape="smooth" label="Shape: Smooth" />
      <Alert {...args} shape="curved" label="Shape: Curved" />
      <Alert {...args} shape="full" label="Shape: Full" />
    </div>
  ),
};

export const Icons: Story = {
  args: {
    label: 'This is an alert message with different icons.',
    shape: 'smooth',
    dismissible: true,
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Alert {...args} color="default" icon="lucide:info" label="Default color - Info" />
      <Alert
        {...args}
        color="contrast"
        icon="lucide:check-circle"
        label="Contrast color - Check Circle"
      />
      <Alert
        {...args}
        color="muted"
        icon="lucide:alert-circle"
        label="Muted color - Alert Circle"
      />
      <Alert {...args} color="primary" icon="lucide:shield" label="Primary color - Shield" />
      <Alert {...args} color="info" icon="lucide:info" label="Info color - Info" />
      <Alert {...args} color="success" icon="lucide:thumbs-up" label="Success color - Thumbs Up" />
      <Alert
        {...args}
        color="warning"
        icon="lucide:exclamation-circle"
        label="Warning color - Exclamation"
      />
      <Alert
        {...args}
        color="danger"
        icon="lucide:alert-octagon"
        label="Danger color - Alert Octagon"
      />
      <Alert {...args} color="warning" icon="lucide:star" label="Warning color - Star" />
      <Alert {...args} color="violet" icon="lucide:moon" label="Violet color - Moon" />
    </div>
  ),
};

export const Color: Story = {
  args: {
    label: 'This is an alert message with different colors.',
    shape: 'smooth',
    icon: 'lucide:info',
    dismissible: true,
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Alert {...args} color="default" label="Default color" />
      <Alert {...args} color="contrast" label="Contrast color" />
      <Alert {...args} color="muted" label="Muted color" />
      <Alert {...args} color="primary" label="Primary color" />
      <Alert {...args} color="info" label="Info color" />
      <Alert {...args} color="success" label="Success color" />
      <Alert {...args} color="warning" label="Warning color" />
      <Alert {...args} color="danger" label="Danger color" />
      <Alert {...args} color="violet" label="Violet color" />
    </div>
  ),
};
