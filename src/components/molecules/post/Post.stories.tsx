import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Post } from './Post';

export default {
  title: 'Molecules/Post',
  component: Post,
  argTypes: {
    data: {
        timestamp:  "text",
        id:  "text",
        image:  "text",
        title:  "text",
        tags:  ['text'],
        description:  "text",
    }
  },
  args: {
    data: {
        timestamp:  "1628726400",
        id:  "1",
        image:  "https://i.ibb.co/r5Wsp79/post1.jpg",
        title:  "Case study",
        tags:  [
            "topic",
            "user"
        ],
        description:  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    }
  }
} as Meta<typeof Post>;

export const Default: StoryFn<typeof Post> = (args) => <Post {...args} />;
