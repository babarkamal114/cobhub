import type { Meta, StoryObj } from '@storybook/react';

import { IconBox } from 'ui-components';

const meta: Meta<typeof IconBox> = {
  title: 'UI/IconBox',
  component: IconBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconBox>;

export const Default: Story = {
  args: {
    icon: 'fluent:bot-48-regular',
    label: 'Check icon',
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconBox icon="pepicons-pencil:calculator" shape="full" label="Full shape" />
      <IconBox icon="lets-icons:world-fill" shape="rounded" label="Rounded shape" />
      <IconBox icon="fluent:bot-48-regular" shape="straight" label="Straight shape" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconBox icon="pepicons-pencil:calculator" size="sm" label="Small icon" />
      <IconBox icon="lets-icons:world-fill" size="md" label="Medium icon" />
      <IconBox icon="fluent:bot-48-regular" size="lg" label="Large icon" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconBox icon="pepicons-pencil:calculator" variant="solid" label="Filled" />
      <IconBox icon="fluent:bot-48-regular" variant="pastel" label="Outlined" />
      <IconBox icon="ic:twotone-warning" variant="outlined" label="Soft" />
    </div>
  ),
};

export const SolidColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <IconBox icon="pepicons-pencil:calculator" color="default" variant="solid" label="Filled" />
      <IconBox icon="lets-icons:world-fill" color="contrast" variant="solid" label="Filled" />
      <IconBox icon="fluent:bot-48-regular" color="muted" variant="solid" label="Filled" />
      <IconBox icon="mynaui:leaf" color="primary" variant="solid" label="Filled" />
      <IconBox icon="ph:traffic-cone-duotone" color="success" variant="solid" label="Filled" />
      <IconBox icon="ic:twotone-warning" color="warning" variant="solid" label="Filled" />
      <IconBox icon="bi:info" color="info" variant="solid" label="Filled" />
      <IconBox icon="hugeicons:danger" color="danger" variant="solid" label="Filled" />
    </div>
  ),
};

export const PastelColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <IconBox icon="pepicons-pencil:calculator" color="default" variant="pastel" label="Pastel" />
      <IconBox icon="lets-icons:world-fill" color="contrast" variant="pastel" label="Pastel" />
      <IconBox icon="fluent:bot-48-regular" color="muted" variant="pastel" label="Pastel" />
      <IconBox icon="mynaui:leaf" color="primary" variant="pastel" label="Pastel" />
      <IconBox icon="ph:traffic-cone-duotone" color="success" variant="pastel" label="Pastel" />
      <IconBox icon="ic:twotone-warning" color="warning" variant="pastel" label="Pastel" />
      <IconBox icon="bi:info" color="info" variant="pastel" label="Pastel" />
      <IconBox icon="hugeicons:danger" color="danger" variant="pastel" label="Pastel" />
    </div>
  ),
};

export const OutlineColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <IconBox
        icon="pepicons-pencil:calculator"
        color="default"
        variant="outlined"
        label="Pastel"
      />
      <IconBox icon="lets-icons:world-fill" color="contrast" variant="outlined" label="Pastel" />
      <IconBox icon="fluent:bot-48-regular" color="muted" variant="outlined" label="Pastel" />
      <IconBox icon="mynaui:leaf" color="primary" variant="outlined" label="Pastel" />
      <IconBox icon="ph:traffic-cone-duotone" color="success" variant="outlined" label="Pastel" />
      <IconBox icon="ic:twotone-warning" color="warning" variant="outlined" label="Pastel" />
      <IconBox icon="bi:info" color="info" variant="outlined" label="Pastel" />
      <IconBox icon="hugeicons:danger" color="danger" variant="outlined" label="Pastel" />
    </div>
  ),
};

export const SvgMasks: Story = {
  render: () => (
    <div className="flex gap-4">
      <IconBox
        icon="pepicons-pencil:calculator"
        color="primary"
        variant="solid"
        shape="straight"
        mask="hex"
        label="Pastel"
      />
      <IconBox
        icon="lets-icons:world-fill"
        color="success"
        variant="solid"
        shape="straight"
        mask="blob"
        label="Pastel"
      />
      <IconBox
        icon="fluent:bot-48-regular"
        color="warning"
        variant="solid"
        shape="straight"
        mask="deca"
        label="Pastel"
      />
      <IconBox
        icon="mynaui:leaf"
        color="danger"
        variant="solid"
        shape="straight"
        mask="diamond"
        label="Pastel"
      />
      <IconBox
        icon="ph:traffic-cone-duotone"
        color="primary"
        variant="pastel"
        shape="straight"
        mask="hex"
        label="Pastel"
      />
      <IconBox
        icon="ic:twotone-warning"
        color="success"
        variant="pastel"
        shape="straight"
        mask="hex"
        label="Pastel"
      />
      <IconBox
        icon="bi:info"
        color="info"
        variant="pastel"
        shape="straight"
        mask="hex"
        label="Pastel"
      />
      <IconBox
        icon="hugeicons:danger"
        color="danger"
        variant="pastel"
        shape="straight"
        mask="hex"
        label="Pastel"
      />
    </div>
  ),
};
