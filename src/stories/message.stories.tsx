import type { Meta, StoryObj } from '@storybook/react';

import { Message } from 'ui-components';
const meta: Meta<typeof Message> = {
  title: 'UI/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    variant: {
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
      <Message {...args} variant="default" label="Default color" />
      <Message {...args} variant="contrast" label="Contrast color" />
      <Message {...args} variant="muted" label="Muted color" />
      <Message {...args} variant="primary" label="Primary color" />
      <Message {...args} variant="info" label="Info color" />
      <Message {...args} variant="success" label="Success color" />
      <Message {...args} variant="warning" label="Warning color" />
      <Message {...args} variant="danger" label="Danger color" />
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
        variant="success"
        icon="lucide:check-circle"
        label="Success with check icon"
      />
      <Message {...args} variant="info" icon="lucide:info" label="Info with info icon" />
      <Message
        {...args}
        variant="warning"
        icon="lucide:alert-triangle"
        label="Warning with alert triangle"
      />
      <Message
        {...args}
        variant="danger"
        icon="lucide:alert-circle"
        label="Danger with alert circle"
      />
      <Message {...args} variant="primary" icon="lucide:star" label="Primary with star icon" />
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
      <Message {...args} variant="success" label="Success message" />
      <Message {...args} variant="warning" label="Warning message" />
      <Message {...args} variant="info" label="Info message" />
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
