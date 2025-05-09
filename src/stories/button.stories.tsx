import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

import { ButtonProps } from 'types';
import { Button } from 'ui-components';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'pastel', 'outlined'],
    },
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
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    asChild: { control: 'boolean' },
    children: { control: 'text' },
    leftIcon: { control: 'object' },
    rightIcon: { control: 'object' },
    loadingText: { control: 'text' },
  },
  args: {
    children: 'Click Me',
    variant: 'solid',
    size: 'md',
    shape: 'rounded',
    color: 'primary',
    isDisabled: false,
    isLoading: false,
    loadingText: 'Loading...',
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Basic = Template.bind({});

export const SolidVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Solid Variants</h2>
    <div className="flex flex-wrap gap-4">
      <Button variant="solid" color="default">
        Default
      </Button>
      <Button variant="solid" color="contrast">
        Contrast
      </Button>
      <Button variant="solid" color="muted">
        Muted
      </Button>
      <Button variant="solid" color="primary">
        Primary
      </Button>
      <Button variant="solid" color="info">
        Info
      </Button>
      <Button variant="solid" color="success">
        Success
      </Button>
      <Button variant="solid" color="warning">
        Warning
      </Button>
      <Button variant="solid" color="danger">
        Danger
      </Button>
    </div>
  </div>
);

export const PastelVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Pastel Variants</h2>
    <div className="flex flex-wrap gap-4">
      <Button variant="pastel" color="default">
        Default
      </Button>
      <Button variant="pastel" color="contrast">
        Contrast
      </Button>
      <Button variant="pastel" color="muted">
        Muted
      </Button>
      <Button variant="pastel" color="primary">
        Primary
      </Button>
      <Button variant="pastel" color="info">
        Info
      </Button>
      <Button variant="pastel" color="success">
        Success
      </Button>
      <Button variant="pastel" color="warning">
        Warning
      </Button>
      <Button variant="pastel" color="danger">
        Danger
      </Button>
    </div>
  </div>
);

export const OutlinedVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Outlined Variants</h2>
    <div className="flex flex-wrap gap-4 mt-8">
      <Button variant="outlined" color="default">
        Default
      </Button>
      <Button variant="outlined" color="contrast">
        Contrast
      </Button>
      <Button variant="outlined" color="muted">
        Muted
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="danger">
        Danger
      </Button>
    </div>
  </div>
);

export const SizeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Size Variants</h2>
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </div>
);

export const ShapeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Shape Variants</h2>
    <div className="flex flex-wrap gap-4">
      <Button shape="straight">Default</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="smooth">Smooth</Button>
      <Button shape="curved">Curved</Button>
      <Button shape="full">Full</Button>
    </div>
  </div>
);

export const DisabledState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Disabled State</h2>
    <div className="flex flex-wrap gap-4">
      <Button isDisabled>Disabled</Button>
      <Button isDisabled variant="outlined" color="danger">
        Disabled Outlined
      </Button>
      <Button isDisabled variant="pastel" color="warning">
        Disabled Pastel
      </Button>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Loading State</h2>
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText="Fetching...">
        Loading...
      </Button>
      <Button isLoading variant="outlined" color="primary">
        Loading...
      </Button>
      <Button isLoading variant="pastel" color="success">
        Loading...
      </Button>
    </div>
  </div>
);

export const WithIcons = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Buttons with Icons</h2>
    <div className="flex flex-wrap gap-4 mt-8">
      <Button leftIcon={<Icon icon="si:moon-duotone" width="24" height="24" />}>Default</Button>
      <Button color="contrast" leftIcon={<Icon icon="ph:chat-duotone" width="24" height="24" />}>
        Contrast
      </Button>
      <Button
        color="muted"
        leftIcon={<Icon icon="icon-park-twotone:folder-success" width="24" height="24" />}
      >
        Muted
      </Button>
      <Button
        color="primary"
        leftIcon={<Icon icon="solar:cpu-line-duotone" width="24" height="24" />}
      >
        Primary
      </Button>
      <Button
        color="info"
        leftIcon={<Icon icon="ant-design:dashboard-twotone" width="24" height="24" />}
      >
        Info
      </Button>
      <Button
        color="success"
        leftIcon={<Icon icon="solar:keyboard-bold-duotone" width="24" height="24" />}
      >
        Success
      </Button>
      <Button color="warning" rightIcon={<Icon icon="si:alert-duotone" width="24" height="24" />}>
        Warning
      </Button>
      <Button color="danger" rightIcon={<Icon icon="ph:chat-duotone" width="24" height="24" />}>
        Danger
      </Button>
    </div>
  </div>
);
