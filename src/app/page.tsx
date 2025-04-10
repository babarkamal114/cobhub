'use client';

import ThemeSwitch from '@/components/theme-toggle';
import { Alert, Typography } from 'ui-components';

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

        <Alert label="This is a default alert." color="default" shape="smooth" />

        <Alert
          label="Everything went well!"
          color="success"
          shape="rounded"
          icon="lucide:check-circle"
        />

        <Alert
          label="Please be cautious."
          color="warning"
          shape="curved"
          icon="lucide:alert-triangle"
        />
      </div>
    </main>
  );
}
