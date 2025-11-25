import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Radio } from 'ui-components';

const meta: Meta<typeof Radio> = {
  title: 'UI/Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'success', 'info', 'warning', 'danger'],
    },
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

const SingleRadio = (props: React.ComponentProps<typeof Radio>) => {
  const [checked, setChecked] = useState(false);

  return <Radio {...props} checked={checked} onChange={() => setChecked(!checked)} />;
};

const ColorGroup = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (val: string) => void;
}) => {
  const colors = [
    'default',
    'contrast',
    'muted',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {colors.map(color => (
        <Radio
          key={color}
          id={`radio-${color}`}
          name="color-group"
          label={color}
          color={color as any}
          checked={selected === color}
          onChange={() => onChange(color)}
        />
      ))}
    </div>
  );
};

export const Default: Story = {
  args: {
    id: 'default-radio',
    name: 'default',
    label: 'Default Radio',
    color: 'primary',
  },
  render: args => <SingleRadio {...args} />,
};

export const AllColors: Story = {
  render: () => {
    const [selected, setSelected] = useState('primary');
    return <ColorGroup selected={selected} onChange={setSelected} />;
  },
};

export const WithLongLabel: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);
    return (
      <Radio
        id="long-label"
        name="long-label"
        label="This is a radio with a very long descriptive label that wraps to multiple lines"
        color="info"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Radio id="disabled-1" name="disabled" label="Disabled unchecked" color="muted" disabled />
      <Radio
        id="disabled-2"
        name="disabled"
        label="Disabled checked"
        color="success"
        checked
        disabled
      />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => {
    const [selected, setSelected] = useState('1');

    return (
      <div className="flex gap-4">
        <Radio
          id="no-label-1"
          name="no-label"
          label=""
          aria-label="Option 1"
          color="primary"
          checked={selected === '1'}
          onChange={() => setSelected('1')}
        />
        <Radio
          id="no-label-2"
          name="no-label"
          label=""
          aria-label="Option 2"
          color="danger"
          checked={selected === '2'}
          onChange={() => setSelected('2')}
        />
      </div>
    );
  },
};
