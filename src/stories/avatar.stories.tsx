import React from 'react';

import { AvatarProps } from 'types';
import { Avatar, AvatarGroup } from 'ui-components';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['straight', 'rounded', 'smooth', 'curved', 'full'] },
    color: {
      control: 'select',
      options: [
        'default',
        'contrast',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'yellow',
        'violet',
      ],
    },
    src: { control: 'text' },
    text: { control: 'text' },
    alt: { control: 'text' },
  },
};

const Template = (args: AvatarProps) => {
  return <Avatar {...args} />;
};

export const Basic = Template.bind({});

export const Default = () => <Avatar size="sm" shape="full" text="XS" color="primary" />;

export const WithImage = () => (
  <Avatar
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="example"
    size="xxxs"
    shape="full"
    text="XS"
    color="contrast"
  />
);

export const DifferentSizes = () => (
  <div className="flex flex-row gap-2">
    <Avatar size="xxxs" shape="full" text="XS" color="contrast" />
    <Avatar size="xxs" text="XXS" color="muted" />
    <Avatar size="xs" text="XS" color="info" />
    <Avatar size="sm" text="SM" color="success" />
    <Avatar size="md" text="MD" color="warning" />
    <Avatar size="lg" text="LG" color="yellow" />
    <Avatar size="xl" text="XL" color="danger" />
  </div>
);

export const DifferentShapes = () => (
  <div className="flex flex-row gap-2">
    <Avatar shape="straight" text="S" color="primary" />
    <Avatar shape="rounded" text="R" color="success" />
    <Avatar shape="smooth" text="S" color="violet" />
    <Avatar shape="curved" text="C" color="danger" />
    <Avatar shape="full" text="F" color="yellow" />
  </div>
);

export const AvatarGroupStory = () => (
  <AvatarGroup
    avatars={[
      { text: 'JD', shape: 'full', size: 'sm', color: 'primary' },
      { text: 'AB', shape: 'full', size: 'sm', color: 'success' },
      { text: 'CD', shape: 'full', size: 'sm', color: 'muted' },
    ]}
  />
);

AvatarGroupStory.storyName = 'Avatar Group';
