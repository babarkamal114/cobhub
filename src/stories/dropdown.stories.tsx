import type { Meta, StoryFn } from '@storybook/react';
import { Mail, Heart, Settings, User } from 'lucide-react';
import React from 'react';

import { Dropdown } from 'ui-components';

const iconMap = {
  mail: Mail,
  heart: Heart,
  settings: Settings,
  user: User,
};

export default {
  title: 'UI/Form/Dropdown',
  component: Dropdown,
  argTypes: {
    title: { control: 'text' },
    toggleIcon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    toggleImage: { control: 'object' },
    indicator: { control: 'boolean' },
    showAll: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['start', 'end'],
    },
    shape: {
      control: 'select',
      options: ['straight', 'rounded', 'smooth', 'curved'],
    },
  },
  args: {
    title: 'Notifications',
    toggleIcon: Settings,
    indicator: true,
    orientation: 'start',
    shape: 'smooth',
    children: (
      <ul>
        <li className="px-4 py-2 text-sm hover:bg-muted-100 cursor-pointer">Message from John</li>
        <li className="px-4 py-2 text-sm hover:bg-muted-100 cursor-pointer">System alert</li>
        <li className="px-4 py-2 text-sm hover:bg-muted-100 cursor-pointer">New comment</li>
      </ul>
    ),
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />;

export const Default = Template.bind({});

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  toggleIcon: Mail,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  orientation: 'end',
  toggleIcon: Heart,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  toggleImage: <User size={20} />,
};

export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  toggleImage: (
    <img
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop"
      className="rounded"
      alt="User Avatar"
    />
  ),
};

export const WithHeaderLink = Template.bind({});
WithHeaderLink.args = {
  title: 'Notifications',
  showAll: '/notifications',
};
