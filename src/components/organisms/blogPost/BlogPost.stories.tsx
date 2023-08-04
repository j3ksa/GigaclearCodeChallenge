import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { BlogPost } from './BlogPost';

export default {
  title: 'Organisms/BlogPost',
  component: BlogPost,
  argTypes: {
    data: {
        id:  "text",
        title:  "text",
        titleDescription:  "text",
        timestamp:  "text",
        image:  "text",
        event:  {
            "name": "text",
            "price": "text",
            "time": "text",
        },
        descriptionTitle:  "text",
        paragraphs:  {
            "firstParagraph": "text",
            "secondParagraph": "text",
            "thirdParagraph": "text",
            "fourthParagraph": "text",
            "fifthParagraph": "text",
            "sixthParagraph": "text",
            "seventhParagraph": "text",
        },
    }
  },
  args: {
    data: {
        "id": 1,
        "title": "Upgrading your remote business - Talk",
        "titleDescription": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        "timestamp": "12 Sep 2022",
        "image": "https://i.ibb.co/r5Wsp79/post1.jpg",
        "event": {
            "name": "Corn Exchange, Witney, Oxfordshire",
            "price": "Free",
            "time": "1628726400"
        },
        "descriptionTitle": "About this event",
        "paragraphs": {
            "firstParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.",
            "secondParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.",
            "thirdParagraph":  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis.",
            "fourthParagraph": "Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. ",
            "fifthParagraph": "Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.",
            "sixthParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.",
            "seventhParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar."
        }
    }
  }
} as Meta<typeof BlogPost>;

export const Default: StoryFn<typeof BlogPost> = (args) => <BlogPost {...args} />;
