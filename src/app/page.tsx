import { Typography } from "ui-components";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <ThemeToggle />
      <div className="container mx-auto max-w-4xl py-10 space-y-10">
        <Typography variant="h1" className="text-center">
          Welcome to Cobhub!
        </Typography>
        <Typography variant="text-base" className="text-center">
          CobHub is your all-in-one team collaboration platform. Communicate,
          manage tasks, schedule meetings, track performance, and streamline
          workflows—all in one place. Boost productivity and keep your team
          aligned effortlessly.
        </Typography>
      </div>
    </main>
  );
}