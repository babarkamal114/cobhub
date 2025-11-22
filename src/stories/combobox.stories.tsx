import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ComboBoxItem } from '@/types/components';
import { ComboBox } from 'ui-components';

const meta: Meta<typeof ComboBox> = {
  title: 'UI/Form/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    color: {
      control: 'select',
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
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

const sampleItems: ComboBoxItem[] = [
  { id: 1, name: 'Wade Cooper', icon: 'lucide:user' },
  { id: 2, name: 'Arlene Mccoy', icon: 'lucide:user' },
  { id: 3, name: 'Devon Webb', icon: 'lucide:user' },
  { id: 4, name: 'Tom Cook', icon: 'lucide:user' },
  { id: 5, name: 'Tanya Fox', icon: 'lucide:user' },
  { id: 6, name: 'Hellen Schmidt', icon: 'lucide:user' },
  { id: 7, name: 'Caroline Schultz', icon: 'lucide:user' },
  { id: 8, name: 'Mason Heaney', icon: 'lucide:user' },
  { id: 9, name: 'Claudie Smitham', icon: 'lucide:user' },
  { id: 10, name: 'Emil Schaefer', icon: 'lucide:user' },
];

const itemsWithImages: ComboBoxItem[] = [
  { id: 1, name: 'Alice Johnson', image: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Bob Smith', image: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Charlie Brown', image: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Diana Prince', image: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'Eve Adams', image: 'https://i.pravatar.cc/150?img=5' },
];

const StatefulTemplate = (args: any) => {
  const [selected, setSelected] = useState<ComboBoxItem | null>(null);
  return <ComboBox {...args} selected={selected} setSelected={setSelected} />;
};

export const Default: Story = {
  render: StatefulTemplate,
  args: {
    items: sampleItems,
    label: 'Select a person',
    placeholder: 'Search...',
  },
};

export const WithImages: Story = {
  render: StatefulTemplate,
  args: {
    items: itemsWithImages,
    label: 'Select a user',
    placeholder: 'Search users...',
  },
};

export const Sizes: Story = {
  render: () => {
    const [selected1, setSelected1] = useState<ComboBoxItem | null>(null);
    const [selected2, setSelected2] = useState<ComboBoxItem | null>(null);
    const [selected3, setSelected3] = useState<ComboBoxItem | null>(null);

    return (
      <div className="space-y-4">
        <ComboBox
          items={sampleItems}
          selected={selected1}
          setSelected={setSelected1}
          label="Small"
          size="sm"
        />
        <ComboBox
          items={sampleItems}
          selected={selected2}
          setSelected={setSelected2}
          label="Medium"
          size="md"
        />
        <ComboBox
          items={sampleItems}
          selected={selected3}
          setSelected={setSelected3}
          label="Large"
          size="lg"
        />
      </div>
    );
  },
};

export const Shapes: Story = {
  render: () => {
    const [selected1, setSelected1] = useState<ComboBoxItem | null>(null);
    const [selected2, setSelected2] = useState<ComboBoxItem | null>(null);
    const [selected3, setSelected3] = useState<ComboBoxItem | null>(null);
    const [selected4, setSelected4] = useState<ComboBoxItem | null>(null);

    return (
      <div className="space-y-4">
        <ComboBox
          items={sampleItems}
          selected={selected1}
          setSelected={setSelected1}
          label="Rounded"
          shape="rounded"
        />
        <ComboBox
          items={sampleItems}
          selected={selected2}
          setSelected={setSelected2}
          label="Smooth"
          shape="smooth"
        />
        <ComboBox
          items={sampleItems}
          selected={selected3}
          setSelected={setSelected3}
          label="Curved"
          shape="curved"
        />
        <ComboBox
          items={sampleItems}
          selected={selected4}
          setSelected={setSelected4}
          label="Full"
          shape="full"
        />
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [selected1, setSelected1] = useState<ComboBoxItem | null>(null);
    const [selected2, setSelected2] = useState<ComboBoxItem | null>(null);
    const [selected3, setSelected3] = useState<ComboBoxItem | null>(null);

    return (
      <div className="space-y-4">
        <ComboBox
          items={sampleItems}
          selected={selected1}
          setSelected={setSelected1}
          label="Primary"
          color="primary"
        />
        <ComboBox
          items={sampleItems}
          selected={selected2}
          setSelected={setSelected2}
          label="Success"
          color="success"
        />
        <ComboBox
          items={sampleItems}
          selected={selected3}
          setSelected={setSelected3}
          label="Danger"
          color="danger"
        />
      </div>
    );
  },
};

export const WithError: Story = {
  render: StatefulTemplate,
  args: {
    items: sampleItems,
    label: 'Select a person',
    error: 'This field is required',
  },
};

export const Loading: Story = {
  render: StatefulTemplate,
  args: {
    items: sampleItems,
    label: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  render: StatefulTemplate,
  args: {
    items: sampleItems,
    label: 'Disabled',
    disabled: true,
  },
};

export const NoResults: Story = {
  render: StatefulTemplate,
  args: {
    items: [],
    label: 'Empty list',
    noResultText: 'No items available',
  },
};
