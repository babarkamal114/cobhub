import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputOTP } from '@/components/ui/form/input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'UI/Form/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled', 'loading'],
    },
    valueLength: {
      control: 'number',
      min: 4,
      max: 8,
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

const StatefulTemplate = (args: any) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="space-y-2">
      <InputOTP
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Current value: <strong>{value || '(empty)'}</strong>
      </p>
    </div>
  );
};

export const Default: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 4,
    shape: 'smooth',
    variant: 'default',
  },
};

export const SixDigits: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 6,
    shape: 'smooth',
    variant: 'default',
  },
};

export const EightDigits: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 8,
    shape: 'smooth',
    variant: 'default',
  },
};

export const Shapes: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const [value3, setValue3] = useState<string>('');
    const [value4, setValue4] = useState<string>('');
    const [value5, setValue5] = useState<string>('');

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium">Straight</p>
          <InputOTP value={value1} onChange={setValue1} valueLength={4} shape="straight" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Rounded</p>
          <InputOTP value={value2} onChange={setValue2} valueLength={4} shape="rounded" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Smooth</p>
          <InputOTP value={value3} onChange={setValue3} valueLength={4} shape="smooth" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Curved</p>
          <InputOTP value={value4} onChange={setValue4} valueLength={4} shape="curved" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Full</p>
          <InputOTP value={value5} onChange={setValue5} valueLength={4} shape="full" />
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>('1234');
    const [value2, setValue2] = useState<string>('1234');
    const [value3, setValue3] = useState<string>('1234');
    const [value4, setValue4] = useState<string>('1234');
    const [value5, setValue5] = useState<string>('1234');

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium">Default</p>
          <InputOTP value={value1} onChange={setValue1} valueLength={4} variant="default" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Error</p>
          <InputOTP value={value2} onChange={setValue2} valueLength={4} variant="error" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Success</p>
          <InputOTP value={value3} onChange={setValue3} valueLength={4} variant="success" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Disabled</p>
          <InputOTP
            value={value4}
            onChange={setValue4}
            valueLength={4}
            variant="disabled"
            disabled={true}
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Loading</p>
          <InputOTP
            value={value5}
            onChange={setValue5}
            valueLength={4}
            variant="loading"
            loading={true}
          />
        </div>
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 4,
    shape: 'smooth',
    variant: 'default',
  },
  decorators: [
    Story => {
      const [value, setValue] = useState<string>('1234');
      return (
        <div className="space-y-2">
          <Story args={{ value, onChange: setValue, valueLength: 4 }} />
        </div>
      );
    },
  ],
};

export const Disabled: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 4,
    shape: 'smooth',
    variant: 'default',
    disabled: true,
    value: '1234',
  },
};

export const Loading: Story = {
  render: StatefulTemplate,
  args: {
    valueLength: 4,
    shape: 'smooth',
    variant: 'loading',
    loading: true,
    value: '1234',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Enter your OTP code</p>
          <InputOTP
            value={value}
            onChange={setValue}
            valueLength={6}
            shape="smooth"
            variant="default"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Try typing digits, using arrow keys to navigate, or pasting a code.
          </p>
          <p className="text-sm">
            <strong>Current value:</strong> {value || '(empty)'}
          </p>
          <p className="text-sm">
            <strong>Length:</strong> {value.length} / 6
          </p>
          {value.length === 6 && (
            <p className="text-sm text-green-600 dark:text-green-400">
              ✓ Complete! All digits entered.
            </p>
          )}
        </div>
      </div>
    );
  },
};
