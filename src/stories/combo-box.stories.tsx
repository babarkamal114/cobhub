import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ComboBox } from 'ui-components';

// TODO: Add more stories for different states and configurations

const meta: Meta<typeof ComboBox> = {
  title: 'UI/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'smooth', 'curved', 'full'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'contrast', 'error', 'success', 'warning'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

const sampleItems = [
  { id: '1', name: 'Design', icon: 'lucide:palette' },
  { id: '2', name: 'Development', icon: 'lucide:code' },
  { id: '3', name: 'Marketing', icon: 'lucide:megaphone' },
  { id: '4', name: 'Finance', icon: 'lucide:dollar-sign' },
];

export const Basic: Story = {
  args: {
    label: 'Department',
    items: sampleItems,
    selected: sampleItems[0],
    setSelected: () => {},
    size: 'md',
    shape: 'smooth',
    color: 'default',
  },
};

export const WithError: Story = {
  args: {
    label: 'Role',
    items: sampleItems,
    selected: sampleItems[1],
    setSelected: () => {},
    size: 'md',
    shape: 'smooth',
    color: 'danger',
    error: 'Please select a valid role',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Team',
    items: sampleItems,
    selected: sampleItems[2],
    setSelected: () => {},
    size: 'md',
    shape: 'smooth',
    color: 'default',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Select option',
    items: [],
    selected: null,
    setSelected: () => {},
    size: 'md',
    shape: 'smooth',
    color: 'default',
    loading: true,
  },
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-xs">
      {['rounded', 'smooth', 'curved', 'full'].map(shape => (
        <ComboBox
          key={shape}
          label={`Shape: ${shape}`}
          items={sampleItems}
          selected={sampleItems[0]}
          setSelected={() => {}}
          shape={shape as any}
          size="md"
          color="default"
        />
      ))}
    </div>
  ),
};

export const DefaultVariantWithStateManagement: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState(sampleItems[0]);

    const handleChange = (item: (typeof sampleItems)[0]) => {
      setSelectedItem(item);
    };

    return (
      <div className="w-full max-w-xs">
        <ComboBox
          label="Department"
          items={sampleItems}
          selected={selectedItem}
          setSelected={handleChange}
          size="md"
          shape="smooth"
          color="default"
        />
        <div className="mt-4">
          <p>Selected: {selectedItem.name}</p>
        </div>
      </div>
    );
  },
};
