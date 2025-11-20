import type { Meta, StoryObj } from '@storybook/react';

import { Message } from 'ui-components';
const meta: Meta<typeof Message> = {
  title: 'UI/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'contrast',
        'muted',
        'mutedContrast',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved'],
    },
    icon: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'This is a default message',
    color: 'default',
    shape: 'smooth',
  },
};

export const Shapes: Story = {
  args: {
    label: 'This is a message',
    color: 'default',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message {...args} shape="straight" label="Shape: Straight" />
      <Message {...args} shape="rounded" label="Shape: Rounded" />
      <Message {...args} shape="smooth" label="Shape: Smooth" />
      <Message {...args} shape="curved" label="Shape: Curved" />
    </div>
  ),
};

export const Colors: Story = {
  args: {
    label: 'This is a message',
    shape: 'smooth',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message {...args} color="default" label="Default color" />
      <Message {...args} color="contrast" label="Contrast color" />
      <Message {...args} color="muted" label="Muted color" />
      <Message {...args} color="mutedContrast" label="Muted Contrast color" />
      <Message {...args} color="primary" label="Primary color" />
      <Message {...args} color="info" label="Info color" />
      <Message {...args} color="success" label="Success color" />
      <Message {...args} color="warning" label="Warning color" />
      <Message {...args} color="danger" label="Danger color" />
    </div>
  ),
};

export const Icons: Story = {
  args: {
    label: 'This is a message with different icons',
    shape: 'smooth',
    color: 'primary',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message {...args} icon="lucide:info" label="Info icon" />
      <Message {...args} icon="lucide:check-circle" label="Check Circle icon" />
      <Message {...args} icon="lucide:alert-triangle" label="Alert Triangle icon" />
      <Message {...args} icon="lucide:alert-circle" label="Alert Circle icon" />
      <Message {...args} icon="lucide:star" label="Star icon" />
      <Message {...args} icon="lucide:bell" label="Bell icon" />
    </div>
  ),
};

export const ColorWithIcons: Story = {
  args: {
    shape: 'smooth',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message
        {...args}
        color="success"
        icon="lucide:check-circle"
        label="Success with check icon"
      />
      <Message {...args} color="info" icon="lucide:info" label="Info with info icon" />
      <Message
        {...args}
        color="warning"
        icon="lucide:alert-triangle"
        label="Warning with alert triangle"
      />
      <Message
        {...args}
        color="danger"
        icon="lucide:alert-circle"
        label="Danger with alert circle"
      />
      <Message {...args} color="primary" icon="lucide:star" label="Primary with star icon" />
    </div>
  ),
};

export const ContentTypes: Story = {
  args: {
    shape: 'smooth',
    color: 'primary',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message {...args} label="Simple label text" />
      <Message {...args} icon="lucide:info" label="Label with icon" />
      <Message>
        <div>
          <h4 className="font-semibold">Custom Content Title</h4>
          <p>This message has custom JSX content with multiple elements.</p>
        </div>
      </Message>
      <Message>
        <div className="flex items-center gap-2">
          <span className="text-lg">🎉</span>
          <span>Message with emoji and custom layout</span>
        </div>
      </Message>
    </div>
  ),
};

export const DismissibleExamples: Story = {
  args: {
    shape: 'smooth',
  },
  render: args => (
    <div className="flex flex-row flex-wrap gap-4">
      <Message {...args} color="success" label="Success message" />
      <Message {...args} color="warning" label="Warning message" />
      <Message {...args} color="info" label="Info message" />
    </div>
  ),
};

export const SuccessWithCurvedShape: Story = {
  args: {
    label: 'Success operation completed!',
    color: 'success',
    shape: 'curved',
    icon: 'lucide:check-circle',
  },
};
