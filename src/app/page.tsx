"use client"
import { Button, Typography } from "ui-components";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <div className="container mx-auto py-10 space-y-10">
        <Typography variant="h1">Welcome to Cobhub!</Typography>
        <Typography variant="text-base">CobHub is your all-in-one team collaboration platform. Communicate, manage tasks, schedule meetings, track performance, and streamline workflows—all in one place. Boost productivity and keep your team aligned effortlessly.</Typography>
        <Button variant="solid" color="primary">Click here</Button>
      </div>
    </main>
  );
}




