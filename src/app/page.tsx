'use client';
import { Bell } from 'lucide-react';

import ThemeSwitch from '@/components/theme-toggle';
import { Dropdown, Typography } from 'ui-components';

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

        <Dropdown title="Notifications" showAll="viwe" toggleIcon={Bell} indicator>
          <ul>
            <li className="px-4 py-2 text-sm hover:bg-muted-100">Message from John</li>
            <li className="px-4 py-2 text-sm hover:bg-muted-100">System alert</li>
            <li className="px-4 py-2 text-sm hover:bg-muted-100">New comment</li>
          </ul>
        </Dropdown>
      </div>
    </main>
  );
}
