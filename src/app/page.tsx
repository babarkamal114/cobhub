'use client';

import { useState } from 'react';

import ThemeSwitch from '@/components/theme-toggle';
import { ComboBox, Typography } from 'ui-components';

const sampleItems = [
  { id: '1', name: 'Design', icon: 'lucide:palette' },
  { id: '2', name: 'Development', icon: 'lucide:code' },
  { id: '3', name: 'Marketing', icon: 'lucide:megaphone' },
  { id: '4', name: 'Finance', icon: 'lucide:dollar-sign' },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(sampleItems[0]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (item: (typeof sampleItems)[0]) => {
    setSelectedItem(item);
    setError(false);
  };

  const toggleLoading = () => setLoading(!loading);
  const toggleDisabled = () => setDisabled(!disabled);
  const toggleError = () => setError(!error);
  return (
    <main className="bg-white dark:bg-slate-900 flex min-h-screen flex-col items-center justify-center p-6">
      <ThemeSwitch />
      <div className="container mx-auto max-w-4xl py-10 space-y-10">
        <Typography variant="h1" className="text-center text-slate-800 dark:text-slate-200">
          Welcome to Cobhub!
        </Typography>
        <Typography variant="text-base" className="text-center  text-slate-700 dark:text-slate-200">
          CobHub is your all-in-one team collaboration platform. Communicate, manage tasks, schedule
          meetings, track performance, and streamline workflows—all in one place. Boost productivity
          and keep your team aligned effortlessly.
        </Typography>

        <div className="mb-4">
          <label className="block mb-2">Select Department</label>
          <ComboBox
            label="Department"
            items={sampleItems}
            selected={selectedItem}
            setSelected={handleChange}
            size="md"
            shape="smooth" // Change shape as needed: 'rounded', 'smooth', 'curved', 'full'
            color="muted" // You can modify this: 'default', 'muted', 'contrast', 'error', 'success', 'warning'
            loading={loading}
            disabled={disabled}
            error={error ? 'Please select a valid department' : undefined}
          />
        </div>

        <div className="flex gap-4">
          <button onClick={toggleLoading} className="btn btn-primary">
            Toggle Loading
          </button>
          <button onClick={toggleDisabled} className="btn btn-secondary">
            Toggle Disabled
          </button>
          <button onClick={toggleError} className="btn btn-danger">
            Toggle Error
          </button>
        </div>
      </div>
    </main>
  );
}
