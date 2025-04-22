import { Meta, StoryObj } from '@storybook/react';

import { AdvancedToggleSwitch } from 'ui-components';

const meta: Meta<typeof AdvancedToggleSwitch> = {
  title: 'UI/AdvancedToggleSwitch',
  component: AdvancedToggleSwitch,
  argTypes: {
    startIcon: {
      control: 'text',
    },
    endIcon: {
      control: 'text',
    },
    startColor: {
      control: 'select',
      options: ['default', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    endColor: {
      control: 'select',
      options: ['default', 'primary', 'info', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AdvancedToggleSwitch>;

export const Default: Story = {
  args: {
    checked: false,
    startIcon: 'lucide:check',
    endIcon: 'lucide:lock',
    startColor: 'primary',
    endColor: 'danger',
  },
};

export const WithStartIcon: Story = {
  args: {
    checked: true,
    startIcon: 'lucide:star',
    endIcon: 'lucide:lock',
    startColor: 'info',
    endColor: 'danger',
  },
};

export const WithEndIcon: Story = {
  args: {
    checked: false,
    startIcon: 'lucide:check',
    endIcon: 'lucide:heart',
    startColor: 'primary',
    endColor: 'success',
  },
};

export const CustomColors: Story = {
  args: {
    checked: true,
    startIcon: 'lucide:check',
    endIcon: 'lucide:lock',
    startColor: 'warning',
    endColor: 'info',
  },
};

export const MultipleStates: Story = {
  args: {
    checked: false,
    startIcon: 'lucide:check',
    endIcon: 'lucide:lock',
    startColor: 'danger',
    endColor: 'success',
  },
};
