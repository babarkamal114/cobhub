import { Icon } from '@iconify/react/dist/iconify.js';
import { Meta, StoryObj } from '@storybook/react';
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
      options: ['sm', 'md', 'lg', 'xl'],
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
    children: <Icon icon="ph:chat-duotone" width="24" height="24" />,
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
    children: <Icon icon="ph:chat-duotone" width="24" height="24" />,
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
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="contrast">
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="muted">
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="primary">
        <Icon icon="ant-design:setting-twotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="info">
        <Icon icon="solar:login-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="success">
        <Icon icon="ic:twotone-folder" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="warning">
        <Icon icon="solar:document-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="danger">
        <Icon icon="solar:upload-bold-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);

export const OutlinedVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Outlined Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="outlined" color="default">
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="contrast">
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="muted">
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="primary">
        <Icon icon="ant-design:setting-twotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="info">
        <Icon icon="solar:login-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="success">
        <Icon icon="ic:twotone-folder" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="warning">
        <Icon icon="solar:document-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="danger">
        <Icon icon="solar:upload-bold-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);

export const PastelVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Pastel Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="pastel" color="default">
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="contrast">
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="muted">
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="primary">
        <Icon icon="ant-design:setting-twotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="info">
        <Icon icon="solar:login-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="success">
        <Icon icon="ic:twotone-folder" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="warning">
        <Icon icon="solar:document-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="danger">
        <Icon icon="solar:upload-bold-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);

export const SizeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Size Variants</h2>
    <div className="flex gap-4">
      <IconButton variant="solid" color="primary" size="sm">
        <Icon icon="ph:chat-duotone" width="16" height="16" />
      </IconButton>
      <IconButton variant="solid" color="primary" size="md">
        <Icon icon="si:heart-duotone" width="20" height="20" />
      </IconButton>
      <IconButton variant="solid" color="primary" size="lg">
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="primary" size="xl">
        <Icon icon="solar:upload-bold-duotone" width="28" height="28" />
      </IconButton>
    </div>
  </div>
);

export const ShapeVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Shape Variants</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton shape="straight" color="default">
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton shape="rounded">
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton shape="smooth">
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton shape="curved">
        <Icon icon="ant-design:setting-twotone" width="24" height="24" />
      </IconButton>
      <IconButton shape="full">
        <Icon icon="solar:login-bold-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);

export const DisabledState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Disabled State</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton color="default" disabled>
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton color="contrast" disabled>
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton color="muted" disabled>
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
      <IconButton color="primary" disabled>
        <Icon icon="ant-design:setting-twotone" width="24" height="24" />
      </IconButton>
      <IconButton color="info" disabled>
        <Icon icon="solar:login-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton color="success" disabled>
        <Icon icon="ic:twotone-folder" width="24" height="24" />
      </IconButton>
      <IconButton color="warning" disabled>
        <Icon icon="solar:document-bold-duotone" width="24" height="24" />
      </IconButton>
      <IconButton color="danger" disabled>
        <Icon icon="solar:upload-bold-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Loading State</h2>
    <div className="flex flex-wrap gap-4">
      <IconButton variant="solid" color="default" loading>
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="solid" color="primary" loading>
        <Icon icon="ph:chat-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="outlined" color="primary" loading>
        <Icon icon="si:heart-duotone" width="24" height="24" />
      </IconButton>
      <IconButton variant="pastel" color="success" loading>
        <Icon icon="ph:cloud-duotone" width="24" height="24" />
      </IconButton>
    </div>
  </div>
);
