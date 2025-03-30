"use client";
import { Button, Typography } from "ui-components";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Input } from "ui-components";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation example
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted", formData);

    // Clear error after form submission
    setError(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <div className="container mx-auto py-10 space-y-10">
        <Typography variant="h1">Welcome to Cobhub!</Typography>
        <Typography variant="text-base">
          CobHub is your all-in-one team collaboration platform. Communicate,
          manage tasks, schedule meetings, track performance, and streamline
          workflows—all in one place. Boost productivity and keep your team
          aligned effortlessly.
        </Typography>
        
        {/* Error message display */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Form starts here */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <div>
          
            <Input
              id="username"
              name="username"
              type="text"
              label="User name"
              value={formData.username}
              onChange={handleChange}
              variant="default"
              inputSize="md"
              placeholder="Enter your username"
              error={error && !formData.username ? "Username is required" : undefined}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="default"
              inputSize="md"
              placeholder="Enter your email"
              error={error && !formData.email ? "Email is required" : undefined}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="default"
              inputSize="md"
              placeholder="Enter your password"
              error={error && !formData.password ? "Password is required" : undefined}
              showPasswordToggle={true}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>

        <Button variant="solid" color="primary">Click here</Button>
      </div>
    </main>
  );
}
