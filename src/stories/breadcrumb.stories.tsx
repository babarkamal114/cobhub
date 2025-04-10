import { Meta, StoryFn } from '@storybook/react';
import { Home, Folder, FileText } from 'lucide-react';
import React from 'react';

import { Breadcrumb } from 'ui-components';

export default {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    separator: {
      control: 'radio',
      options: ['slash', 'chevron', 'arrow', 'dot'],
    },
    color: {
      control: 'select',
      options: ['default', 'contrast', 'muted', 'primary', 'info', 'success', 'warning', 'danger'],
    },
  },
} as Meta<typeof Breadcrumb>;

const breadcrumbItems = [
  { title: 'Home', href: '#', icon: Home },
  { title: 'Projects', href: '#', icon: Folder },
  { title: 'Document', icon: FileText },
];

const Template: StoryFn<typeof Breadcrumb> = args => <Breadcrumb {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: breadcrumbItems,
  separator: 'slash',
  color: 'default',
};

export const ChevronSeparator = Template.bind({});
ChevronSeparator.args = {
  items: breadcrumbItems,
  separator: 'chevron',
  color: 'primary',
};

export const ArrowSeparator = Template.bind({});
ArrowSeparator.args = {
  items: breadcrumbItems,
  separator: 'arrow',
  color: 'info',
};

export const DotSeparator = Template.bind({});
DotSeparator.args = {
  items: breadcrumbItems,
  separator: 'dot',
  color: 'success',
};
