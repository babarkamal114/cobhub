'use client';

import ThemeSwitch from '@/components/theme-toggle';
import { Select, Option } from '@/components/ui/select';
import { Typography } from 'ui-components';

export default function Home() {
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
        <Select
          label="Select your option"
          options={[
            { label: 'Option1', value: 'option1' },
            { label: 'Option2', value: 'option2' },
            { label: 'Option3', value: 'option3' },
            { label: 'Option4', value: 'option4' },
          ]}
          onChange={(value: Option | Option[] | null) => {
            console.log('Selected:', value);
          }}
        />
      </div>
    </main>
  );
}
