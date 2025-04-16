import { Search } from 'lucide-react';
import React from 'react';

import { Select } from './select';

export default {
  title: 'Components/Select',
  component: Select,
};

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export const Basic = () => (
  <Select label="Fruit" options={options} onChange={val => console.log(val)} />
);

export const WithIcon = () => (
  <Select label="Fruit" options={options} icon={Search} onChange={val => console.log(val)} />
);

export const Multiple = () => (
  <Select label="Fruits" options={options} multiple onChange={val => console.log(val)} />
);

export const Loading = () => <Select label="Fruits" options={[]} loading onChange={() => {}} />;

export const ErrorState = () => (
  <Select
    label="Fruits"
    options={options}
    error="You must select at least one option"
    onChange={() => {}}
  />
);
