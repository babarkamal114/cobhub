import { Button, Card } from "ui-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
      ],
    },
    shape: {
      control: "select",
      options: ["straight", "rounded", "smooth", "curved"],
    },
    shadow: {
      control: "select",
      options: ["none", "flat", "hover"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Content = ({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button?: boolean;
}) => (
  <div className="p-4 space-y-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
    {button && (
      <button className="mt-2 text-sm font-medium text-primary-600 hover:underline">
        Learn more
      </button>
    )}
  </div>
);

export const Default: Story = {
  args: {
    color: "default",
    shape: "smooth",
    shadow: "none",
    children: (
      <Content
        title="Getting Started"
        description="Set up your account and start managing projects in minutes."
        button
      />
    ),
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    shape: "rounded",
    shadow: "flat",
    children: (
      <Content
        title="Upgrade to Pro"
        description="Access premium features and boost your productivity."
        button
      />
    ),
  },
};

export const WithHoverShadow: Story = {
  args: {
    color: "info",
    shape: "curved",
    shadow: "hover",
    children: (
      <Content
        title="Team Collaboration"
        description="Invite your team and work together in real-time."
        button
      />
    ),
  },
};

export const Success: Story = {
  args: {
    color: "success",
    shape: "rounded",
    shadow: "flat",
    children: (
      <Content
        title="Success!"
        description="Your changes have been saved successfully."
      />
    ),
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    shape: "smooth",
    shadow: "hover",
    children: (
      <Content
        title="Unsaved Changes"
        description="You have unsaved work. Save before leaving."
        button
      />
    ),
  },
};
