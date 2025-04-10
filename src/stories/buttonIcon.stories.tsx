import { Meta, StoryObj } from '@storybook/react';
import { Mail, Heart, Settings, Loader2 } from 'lucide-react';
import React from 'react';

import { IconButton } from 'ui-components';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'pastel', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    loading: { control: 'boolean' },
    children: { control: 'object' },
  },
  args: {
    children: <Mail size={20} />,
    variant: 'solid',
    size: 'md',
    shape: 'rounded',
    color: 'primary',
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Mail size={20} />,
    variant: 'solid',
    size: 'md',
    shape: 'rounded',
    color: 'primary',
    loading: false,
  },
};

export const SolidVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Solid Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="solid" color="default">
        <Mail size={20} />
      </IconButton>
      <IconButton variant="solid" color="contrast">
        <Heart size={20} />
      </IconButton>
      <IconButton variant="solid" color="primary">
        <Settings size={20} />
      </IconButton>
      <IconButton variant="solid" color="danger">
        <Loader2 size={20} />
      </IconButton>
    </div>
  </div>
);

export const OutlinedVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Outlined Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="outlined" color="default">
        <Mail size={20} />
      </IconButton>
      <IconButton variant="outlined" color="contrast">
        <Heart size={20} />
      </IconButton>
      <IconButton variant="outlined" color="primary">
        <Settings size={20} />
      </IconButton>
    </div>
  </div>
);

export const PastelVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Pastel Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="pastel" color="default">
        <Mail size={20} />
      </IconButton>
      <IconButton variant="pastel" color="contrast">
        <Heart size={20} />
      </IconButton>
      <IconButton variant="pastel" color="primary">
        <Settings size={20} />
      </IconButton>
    </div>
  </div>
);

export const SizeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Size Variants</h2>
    <div className="flex flex-wrap gap-4 items-center">
      <IconButton size="sm">
        <Mail size={20} />
      </IconButton>
      <IconButton size="md">
        <Heart size={20} />
      </IconButton>
      <IconButton size="lg">
        <Settings size={20} />
      </IconButton>
    </div>
  </div>
);

export const ShapeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Shape Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton shape="straight">
        <Mail size={20} />
      </IconButton>
      <IconButton shape="rounded">
        <Heart size={20} />
      </IconButton>
      <IconButton shape="smooth">
        <Settings size={20} />
      </IconButton>
      <IconButton shape="curved">
        <Mail size={20} />
      </IconButton>
      <IconButton shape="full">
        <Heart size={20} />
      </IconButton>
    </div>
  </div>
);

export const DisabledState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Disabled State</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton disabled>
        <Mail size={20} />
      </IconButton>
      <IconButton disabled variant="outlined" color="primary">
        <Heart size={20} />
      </IconButton>
      <IconButton disabled variant="pastel" color="warning">
        <Settings size={20} />
      </IconButton>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Loading State</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton loading>
        <Mail size={20} />
      </IconButton>
      <IconButton loading>
        <Heart size={20} />
      </IconButton>
      <IconButton loading>
        <Settings size={20} />
      </IconButton>
    </div>
  </div>
);
