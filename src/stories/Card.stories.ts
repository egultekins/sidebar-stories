import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../stories/card';
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
    },
    description: {
      control: 'text',
      description: 'Description or content of the card',
    },
    imageUrl: {
      control: 'text',
      description: 'URL of the image to display',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when the card is clicked',
    },
    className: {
      control: 'text',
      description: 'Custom styles for the card',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A reusable Card component for displaying content with an optional image.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default story
export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a simple card component with a title and description.',
  },
};

// Card with an image
export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image.',
    imageUrl: 'https://via.placeholder.com/300',
  },
};

// Card with custom styles
export const CustomStyles: Story = {
  args: {
    title: 'Custom Styled Card',
    description: 'This card has custom styles applied.',
    className: 'border-2 border-blue-500',
  },
};

// Interactive Card
export const Interactive: Story = {
  args: {
    title: 'Clickable Card',
    description: 'Click this card to trigger an action.',
    onClick: () => alert('Card clicked!'),
  },
};

// Multiple Cards in a grid
export const Grid: Story = {
  args: {
    title: 'Grid of Cards',
    description: 'Multiple cards displayed in a grid.',
  },
  parameters: {
    layout: 'fullscreen',
  },
};