import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from 'ui-components';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'UI/Tag',
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'pastel', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
    shape: 'rounded',
    variant: 'solid',
    color: 'primary',
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag shape="straight">Straight</Tag>
      <Tag shape="rounded">Rounded</Tag>
      <Tag shape="smooth">Smooth</Tag>
      <Tag shape="curved">Curved</Tag>
      <Tag shape="full">Full</Tag>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag variant="solid">Solid</Tag>
      <Tag variant="pastel">Pastel</Tag>
      <Tag variant="outlined">Outlined</Tag>
    </div>
  ),
};

export const SolidColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="solid" color="default">
        Default
      </Tag>
      <Tag variant="solid" color="contrast">
        Contrast
      </Tag>
      <Tag variant="solid" color="muted">
        Muted
      </Tag>
      <Tag variant="solid" color="primary">
        Primary
      </Tag>
      <Tag variant="solid" color="info">
        Info
      </Tag>
      <Tag variant="solid" color="success">
        Success
      </Tag>
      <Tag variant="solid" color="warning">
        Warning
      </Tag>
      <Tag variant="solid" color="danger">
        Danger
      </Tag>
    </div>
  ),
};

export const PastelColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="pastel" color="default">
        Default
      </Tag>
      <Tag variant="pastel" color="contrast">
        Contrast
      </Tag>
      <Tag variant="pastel" color="muted">
        Muted
      </Tag>
      <Tag variant="pastel" color="primary">
        Primary
      </Tag>
      <Tag variant="pastel" color="info">
        Info
      </Tag>
      <Tag variant="pastel" color="success">
        Success
      </Tag>
      <Tag variant="pastel" color="warning">
        Warning
      </Tag>
      <Tag variant="pastel" color="danger">
        Danger
      </Tag>
    </div>
  ),
};

export const OutlineColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="outlined" color="default">
        Default
      </Tag>
      <Tag variant="outlined" color="contrast">
        Contrast
      </Tag>
      <Tag variant="outlined" color="muted">
        Muted
      </Tag>
      <Tag variant="outlined" color="primary">
        Primary
      </Tag>
      <Tag variant="outlined" color="info">
        Info
      </Tag>
      <Tag variant="outlined" color="success">
        Success
      </Tag>
      <Tag variant="outlined" color="warning">
        Warning
      </Tag>
      <Tag variant="outlined" color="danger">
        Danger
      </Tag>
    </div>
  ),
};
