import { MemoryRouter } from "react-router-dom";
import Sidebar from "../Sidebar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
