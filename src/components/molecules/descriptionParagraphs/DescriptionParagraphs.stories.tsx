import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DescriptionParagraphs } from './DescriptionParagraphs';

export default {
  title: 'Molecules/DescriptionParagraphs',
  component: DescriptionParagraphs,
  tags: ['autodocs'],
  argTypes: {
    paragraphs: {
        firstParagraph: "text",
        secondParagraph: "text",
        thirdParagraph: "text",
        fourthParagraph: "text",
        fifthParagraph: "text",
        sixthParagraph: "text",
        seventhParagraph: "text",
    }
  },
  args: {
    paragraphs: {
        firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        thirdParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        fourthParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        fifthParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        sixthParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
        seventhParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
    }
  }
} as Meta<typeof DescriptionParagraphs>;

export const Default: StoryFn<typeof DescriptionParagraphs> = (args) => <DescriptionParagraphs {...args} />;