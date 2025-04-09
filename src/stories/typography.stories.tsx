import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../components/ui/typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "This is default typography",
  },
};

export const Headings: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Typography variant="h1">Heading 1 - 48px Bold</Typography>
        <Typography variant="h2">Heading 2 - 36px Bold</Typography>
        <Typography variant="h3">Heading 3 - 30px Bold</Typography>
        <Typography variant="h4">Heading 4 - 24px Bold</Typography>
        <Typography variant="h5">Heading 5 - 20px Semibold</Typography>
        <Typography variant="h6">Heading 6 - 18px Semibold</Typography>
      </div>
    ),
  },
};

export const BodyText: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Typography variant="text-base">Body - 16px Regular</Typography>
        <Typography variant="text-base-medium">
          Body Medium - 16px Medium
        </Typography>
        <Typography variant="text-base-semibold">
          Body Semibold - 16px Semibold
        </Typography>
        <Typography variant="text-base-bold">Body Bold - 16px Bold</Typography>
      </div>
    ),
  },
};

export const SmallText: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Typography variant="text-sm">Small - 14px Regular</Typography>
        <Typography variant="text-sm-medium">
          Small Medium - 14px Medium
        </Typography>
        <Typography variant="text-sm-semibold">
          Small Semibold - 14px Semibold
        </Typography>
        <Typography variant="text-sm-bold">Small Bold - 14px Bold</Typography>
      </div>
    ),
  },
};

export const ExtraSmall: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Typography variant="text-xs">Extra Small - 12px Regular</Typography>
        <Typography variant="text-xs-medium">
          Extra Small Medium - 12px Medium
        </Typography>
        <Typography variant="text-xs-semibold">
          Extra Small Semibold - 12px Semibold
        </Typography>
        <Typography variant="text-xs-bold">
          Extra Small Bold - 12px Bold
        </Typography>
      </div>
    ),
  },
};
