import React from 'react';

import { ButtonLinkProps } from '@/types';
import { ButtonLink } from 'ui-components';

export default {
  title: 'UI/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
    href: {
      control: 'text',
      description: 'The URL to navigate to when the link is clicked.',
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Go to Dashboard',
    variant: 'solid',
    size: 'md',
    color: 'primary',
    href: 'https://example.com',
    isDisabled: false,
    isLoading: false,
  },
};

const Template = (args: ButtonLinkProps) => <ButtonLink {...args} />;

export const Basic = Template.bind({});

export const SolidVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Solid Variants</h2>
    <div className="flex flex-wrap gap-4">
      <ButtonLink variant="solid" color="default" href="https://example.com">
        Default
      </ButtonLink>
      <ButtonLink variant="solid" color="primary" href="https://example.com">
        Primary
      </ButtonLink>
      <ButtonLink variant="solid" color="success" href="https://example.com">
        Secondary
      </ButtonLink>
      <ButtonLink variant="solid" color="danger" href="https://example.com">
        Danger
      </ButtonLink>
      <ButtonLink variant="solid" color="success" href="https://example.com">
        Success
      </ButtonLink>
    </div>
  </div>
);

export const OutlinedVariants = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Outlined Variants</h2>
    <div className="flex flex-wrap gap-4">
      <ButtonLink variant="outlined" color="default" href="https://example.com">
        Default
      </ButtonLink>
      <ButtonLink variant="outlined" color="primary" href="https://example.com">
        Primary
      </ButtonLink>
      <ButtonLink variant="outlined" color="success" href="https://example.com">
        Secondary
      </ButtonLink>
      <ButtonLink variant="outlined" color="danger" href="https://example.com">
        Danger
      </ButtonLink>
      <ButtonLink variant="outlined" color="success" href="https://example.com">
        Success
      </ButtonLink>
    </div>
  </div>
);

export const DisabledState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Disabled State</h2>
    <div className="flex flex-wrap gap-4">
      <ButtonLink isDisabled href="https://example.com">
        Disabled
      </ButtonLink>
      <ButtonLink isDisabled variant="outlined" color="danger" href="https://example.com">
        Disabled Outlined
      </ButtonLink>
      <ButtonLink isDisabled variant="solid" color="warning" href="https://example.com">
        Disabled Text
      </ButtonLink>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Loading State</h2>
    <div className="flex flex-wrap gap-4">
      <ButtonLink isLoading href="https://example.com">
        Loading
      </ButtonLink>
      <ButtonLink isLoading href="https://example.com">
        Loading...
      </ButtonLink>
      <ButtonLink isLoading variant="outlined" color="primary" href="https://example.com">
        Loading...
      </ButtonLink>
      <ButtonLink isLoading variant="solid" color="success" href="https://example.com">
        Loading...
      </ButtonLink>
    </div>
  </div>
);
