import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/input";
import { Search, Mail, Lock } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        placeholder="Search..."
        leftIcon={<Search className="h-4 w-4" />}
      />
      <Input
        placeholder="Email"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        type="password"
        placeholder="Password"
        leftIcon={<Lock className="h-4 w-4" />}
        showPasswordToggle
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input inputSize="sm" placeholder="Small input" />
      <Input inputSize="md" placeholder="Medium input" />
      <Input inputSize="lg" placeholder="Large input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Input placeholder="Default state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error="This field is required" />
      <Input placeholder="Success state" success="Looks good!" />
    </div>
  ),
};

export const WithClearButton: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        placeholder="Type to clear..."
        showClearButton
        onClear={() => console.log("Clear clicked")}
      />
      <Input
        placeholder="With left icon and clear"
        leftIcon={<Search className="h-4 w-4" />}
        showClearButton
        onClear={() => console.log("Clear clicked")}
      />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        type="password"
        placeholder="Password with toggle"
        showPasswordToggle
      />
      <Input
        type="password"
        placeholder="Password with error"
        showPasswordToggle
        error="Password must be at least 8 characters"
      />
    </div>
  ),
}; 