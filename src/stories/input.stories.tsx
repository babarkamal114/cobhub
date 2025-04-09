import { Eye, X } from 'lucide-react';
import React from 'react';

import { Input } from 'ui-components';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    leftIcon: { control: 'node' },
    rightIcon: { control: 'node' },
    error: { control: 'text' },
    success: { control: 'text' },
    showPasswordToggle: { control: 'boolean' },
    onClear: { action: 'onClear' },
    showClearButton: { control: 'boolean' },
    label: { control: 'text' },
    labelFor: { control: 'text' },
  },
};

export const Default = () => <Input label="Email Address" labelFor="email" type="email" />;

export const WithError = () => (
  <Input
    label="Email Address"
    labelFor="email-error"
    type="email"
    error="Invalid email address"
    placeholder="Email address"
  />
);

export const WithSuccess = () => (
  <Input
    label="Email Address"
    labelFor="email-success"
    type="email"
    success="Email address is valid"
    placeholder="Email Address"
  />
);

export const WithLeftIcon = () => (
  <Input
    label="Username"
    labelFor="username"
    type="text"
    leftIcon={<X className="h-5 w-5" />}
    placeholder="Username"
  />
);

export const WithRightIcon = () => (
  <Input
    label="Password"
    labelFor="password"
    type="password"
    rightIcon={<Eye className="h-5 w-5" />}
    placeholder="Password"
  />
);

export const WithPasswordToggle = () => (
  <Input
    label="Password"
    labelFor="password-toggle"
    type="password"
    showPasswordToggle={true}
    placeholder="Password"
  />
);

export const WithClearButton = () => (
  <Input
    label="Search"
    labelFor="search-clear"
    type="text"
    showClearButton={true}
    value="Some text"
    placeholder="Search"
  />
);
