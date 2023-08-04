import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { PostList } from './PostList';

export default {
  title: 'Organisms/PostList',
  component: PostList,
  argTypes: {
    data: {
        posts: [
            {
                id: "text",
                image: "text",
                title: "text",
                tags: [
                    "text"
                ],
                timestamp: "text",
                description: "text",
            }
        ],
        homeTitle: "text"
    }
  },
  args: {
    data: {
        posts: [
            {
                "id": "1",
                "image": "https://i.ibb.co/r5Wsp79/post1.jpg",
                "title": "Case Study",
                "tags": [
                    "topic",
                    "user"
                ],
                "timestamp": "1628726400",
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
            {
                "id": "2",
                "image": "https://i.ibb.co/3d9VYy3/post2.jpg",
                "title": "Case Study",
                "tags": [
                    "topic",
                    "user"
                ],
                "timestamp": "1618617600",
                "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
        ],
        homeTitle: "Check our latest Posts"
    }
  }
} as Meta<typeof PostList>;

export const Default: StoryFn<typeof PostList> = (args) => <PostList {...args} />;
