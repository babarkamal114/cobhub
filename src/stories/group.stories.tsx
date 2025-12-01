import type { Meta, StoryObj } from '@storybook/react';

import { Group, Button, Input } from 'ui-components';

const meta: Meta<typeof Group> = {
  title: 'UI/Group',
  component: Group,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 'none',
  },
  render: args => (
    <Group {...args}>
      <Button color="primary">First</Button>
      <Button color="primary">Middle</Button>
      <Button color="primary">Last</Button>
    </Group>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <Group>
        <Button variant="solid" color="primary">
          Solid
        </Button>
        <Button variant="solid" color="primary">
          Button
        </Button>
        <Button variant="solid" color="primary">
          Group
        </Button>
      </Group>

      <Group>
        <Button variant="outlined" color="default">
          Outlined
        </Button>
        <Button variant="outlined" color="default">
          Button
        </Button>
        <Button variant="outlined" color="default">
          Group
        </Button>
      </Group>

      <Group>
        <Button variant="pastel" color="success">
          Pastel
        </Button>
        <Button variant="pastel" color="success">
          Button
        </Button>
        <Button variant="pastel" color="success">
          Group
        </Button>
      </Group>
    </div>
  ),
};

export const InputGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Group>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </Group>

      <Group>
        <Input placeholder="Username" />
        <Input placeholder="@example.com" />
      </Group>
    </div>
  ),
};

export const MixedGroup: Story = {
  render: () => (
    <Group>
      <Input placeholder="Search..." />
      <Button color="primary">Search</Button>
      <Button color="default">Filter</Button>
    </Group>
  ),
};

export const OrientationVariants: Story = {
  render: () => (
    <div className="flex flex-row gap-8">
      <Group orientation="horizontal">
        <Button color="primary">Horizontal</Button>
        <Button color="primary">Button</Button>
        <Button color="primary">Group</Button>
      </Group>

      <Group orientation="vertical">
        <Button color="primary">Vertical</Button>
        <Button color="primary">Button</Button>
        <Button color="primary">Group</Button>
      </Group>
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Group spacing="sm">
        <Button color="primary">Small</Button>
        <Button color="primary">Spacing</Button>
        <Button color="primary">Group</Button>
      </Group>

      <Group spacing="md">
        <Button color="primary">Medium</Button>
        <Button color="primary">Spacing</Button>
        <Button color="primary">Group</Button>
      </Group>

      <Group spacing="lg">
        <Button color="primary">Large</Button>
        <Button color="primary">Spacing</Button>
        <Button color="primary">Group</Button>
      </Group>
    </div>
  ),
};
