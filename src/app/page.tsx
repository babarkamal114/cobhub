'use client';

import ThemeSwitch from '@/components/theme-toggle';
import Loader from '@/components/ui/loader';
import { Avatar, Button, ButtonLink, Input, Tag, Typography } from 'ui-components';

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
        <Button>this is a test button</Button>
        <Tag variant={'solid'} color={'default'} shape={'full'}>
          this is a tag
        </Tag>
        <Input label="something" />
        <Avatar text="AK" />
        <ButtonLink href="something" isLoading={false}>
          soemthing
        </ButtonLink>
        <Loader color="default" size="lg" thickness={10} />
      </div>
    </main>
  );
}
