import { Icon } from '@iconify/react/dist/iconify.js';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@/components/ui/table';
import { Button } from 'ui-components';

const meta: Meta<typeof Table> = {
  title: 'UI/Table/Table',
  component: Table.Root,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: args => (
    <Table.Root {...args}>
      <Table.Thead>
        <Table.TR>
          <Table.TH>Name</Table.TH>
          <Table.TH>Email</Table.TH>
          <Table.TH>Role</Table.TH>
        </Table.TR>
      </Table.Thead>
      <Table.Tbody>
        <Table.TR>
          <Table.TD>John Doe</Table.TD>
          <Table.TD>john@example.com</Table.TD>
          <Table.TD>Admin</Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD>Jane Smith</Table.TD>
          <Table.TD>jane@example.com</Table.TD>
          <Table.TD>User</Table.TD>
        </Table.TR>
      </Table.Tbody>
    </Table.Root>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Table.Root className="border border-muted-200 dark:border-muted-800 rounded-lg">
      <Table.Thead>
        <Table.TR>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Name</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Email</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Role</Table.TH>
        </Table.TR>
      </Table.Thead>
      <Table.Tbody>
        <Table.TR>
          <Table.TD>John Doe</Table.TD>
          <Table.TD>john@example.com</Table.TD>
          <Table.TD>Admin</Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD>Jane Smith</Table.TD>
          <Table.TD>jane@example.com</Table.TD>
          <Table.TD>User</Table.TD>
        </Table.TR>
      </Table.Tbody>
    </Table.Root>
  ),
};

export const WithCustomLayout: Story = {
  render: () => (
    <Table.Root className="border border-muted-200 dark:border-muted-800 rounded-lg">
      <Table.Thead>
        <Table.TR>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">User</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Email</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Role</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Rating</Table.TH>
          <Table.TH className="bg-muted-50 dark:bg-muted-900">Action</Table.TH>
        </Table.TR>
      </Table.Thead>

      <Table.Tbody>
        <Table.TR className="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors">
          <Table.TD>
            <span className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John Doe"
                className="w-8 h-8 rounded-full"
              />
              <span>John Doe</span>
            </span>
          </Table.TD>
          <Table.TD>john@example.com</Table.TD>
          <Table.TD>Admin</Table.TD>
          <Table.TD>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Icon icon="mingcute:star-fill" key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
          </Table.TD>
          <Table.TD>
            <Button variant="solid" size="sm" shape="full">
              View
            </Button>
          </Table.TD>
        </Table.TR>

        <Table.TR className="hover:bg-muted-50 dark:hover:bg-muted-900 transition-colors">
          <Table.TD>
            <span className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jane Smith"
                className="w-8 h-8 rounded-full"
              />
              <span>Jane Smith</span>
            </span>
          </Table.TD>
          <Table.TD>jane@example.com</Table.TD>
          <Table.TD>Member</Table.TD>
          <Table.TD>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Icon icon="mingcute:star-fill" key={i} className="w-4 h-4 text-yellow-400" />
              ))}
              {[...Array(2)].map((_, i) => (
                <Icon icon="mingcute:star-fill" key={i} className="w-4 h-4 text-gray-300" />
              ))}
            </div>
          </Table.TD>
          <Table.TD>
            <Button variant="solid" size="sm" shape="full">
              View
            </Button>
          </Table.TD>
        </Table.TR>
      </Table.Tbody>
    </Table.Root>
  ),
};
