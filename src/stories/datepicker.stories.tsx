import { type Meta, type StoryObj } from '@storybook/react';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

import DatePicker from '@/components/ui/form/date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'UI/Form/DatePicker',
  component: DatePicker,
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
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled', 'loading'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const StatefulTemplate = (args: any) => {
  const [value, setValue] = useState<Date>(new Date());
  return <DatePicker {...args} value={value} onChange={(e: any) => setValue(e.target.value)} />;
};

export const Default: Story = {
  render: StatefulTemplate,
  args: {
    label: 'Select a date',
    placeholder: 'Choose date',
  },
};

export const WithIcon: Story = {
  render: StatefulTemplate,
  args: {
    label: 'Appointment Date',
    placeholder: 'Select date',
    icon: <Calendar className="h-5 w-5" />,
  },
};

export const Shapes: Story = {
  render: () => {
    const [value1, setValue1] = useState<Date>(new Date());
    const [value2, setValue2] = useState<Date>(new Date());
    const [value3, setValue3] = useState<Date>(new Date());
    const [value4, setValue4] = useState<Date>(new Date());

    return (
      <div className="space-y-4">
        <DatePicker
          value={value1}
          onChange={(e: any) => setValue1(e.target.value)}
          label="Rounded"
          shape="rounded"
        />
        <DatePicker
          value={value2}
          onChange={(e: any) => setValue2(e.target.value)}
          label="Smooth"
          shape="smooth"
        />
        <DatePicker
          value={value3}
          onChange={(e: any) => setValue3(e.target.value)}
          label="Curved"
          shape="curved"
        />
        <DatePicker
          value={value4}
          onChange={(e: any) => setValue4(e.target.value)}
          label="Full"
          shape="full"
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value1, setValue1] = useState<Date>(new Date());
    const [value2, setValue2] = useState<Date>(new Date());
    const [value3, setValue3] = useState<Date>(new Date());

    return (
      <div className="space-y-4">
        <DatePicker
          value={value1}
          onChange={(e: any) => setValue1(e.target.value)}
          label="Small"
          inputSize="sm"
        />
        <DatePicker
          value={value2}
          onChange={(e: any) => setValue2(e.target.value)}
          label="Medium"
          inputSize="md"
        />
        <DatePicker
          value={value3}
          onChange={(e: any) => setValue3(e.target.value)}
          label="Large"
          inputSize="lg"
        />
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [value1, setValue1] = useState<Date>(new Date());
    const [value2, setValue2] = useState<Date>(new Date());
    const [value3, setValue3] = useState<Date>(new Date());
    const [value4, setValue4] = useState<Date>(new Date());

    return (
      <div className="space-y-4">
        <DatePicker
          value={value1}
          onChange={(e: any) => setValue1(e.target.value)}
          label="Primary"
          color="primary"
        />
        <DatePicker
          value={value2}
          onChange={(e: any) => setValue2(e.target.value)}
          label="Success"
          color="success"
        />
        <DatePicker
          value={value3}
          onChange={(e: any) => setValue3(e.target.value)}
          label="Info"
          color="info"
        />
        <DatePicker
          value={value4}
          onChange={(e: any) => setValue4(e.target.value)}
          label="Danger"
          color="danger"
        />
      </div>
    );
  },
};

export const WithMinDate: Story = {
  render: StatefulTemplate,
  args: {
    label: 'Select future date',
    placeholder: 'Choose date',
    minDate: new Date(),
  },
};

export const Disabled: Story = {
  render: StatefulTemplate,
  args: {
    label: 'Disabled Date Picker',
    placeholder: 'Cannot select',
    disabled: true,
  },
};

export const CustomFormat: Story = {
  render: StatefulTemplate,
  args: {
    label: 'Custom Format (MMM dd, yyyy)',
    placeholder: 'Select date',
    valueFormat: 'MMM dd, yyyy',
  },
};
