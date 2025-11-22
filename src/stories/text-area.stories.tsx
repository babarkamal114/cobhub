import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Textarea } from 'ui-components';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'success', 'info', 'warning', 'danger'],
    },
  },
};

export default meta;

const StatefulTemplate = (args: any) => {
  const [value, setValue] = useState('');
  return <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Default: StoryObj<typeof Textarea> = {
  render: StatefulTemplate,
  args: {
    label: 'Your message',
    placeholder: 'Write something...',
  },
};

export const Shapes: StoryObj<typeof Textarea> = {
  render: StatefulTemplate,
  args: {
    label: 'Shape test',
    placeholder: 'Try different shapes',
    shape: 'curved',
  },
};

export const Colors: StoryObj<typeof Textarea> = {
  render: StatefulTemplate,
  args: {
    label: 'Color test',
    placeholder: 'Test different colors',
    color: 'primary',
  },
};

export const Disabled: StoryObj<typeof Textarea> = {
  args: {
    label: 'Disabled field',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const Loading: StoryObj<typeof Textarea> = {
  args: {
    label: 'Loading...',
    placeholder: 'Loading state active',
    loading: true,
  },
};

export const WithError: StoryObj<typeof Textarea> = {
  args: {
    label: 'Description',
    placeholder: 'This field has an error',
    error: 'Description is required',
  },
};
