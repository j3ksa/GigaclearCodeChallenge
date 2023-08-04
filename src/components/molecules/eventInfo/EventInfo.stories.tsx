import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EventInfo } from './EventInfo';

export default {
  title: 'Molecules/EventInfo',
  component: EventInfo,
  argTypes: {
    data: {
        name:  "text",
        price:  "text",
        time:  "text",
    },
    timestamp: {
        type: 'string'
    }
  },
  args: {
    data: {
        name: "New event",
        price: "$100",
        time: "1628726400"
    },
    timestamp: "10 Sep 2019"
  }
} as Meta<typeof EventInfo>;

export const Default: StoryFn<typeof EventInfo> = (args) => <EventInfo {...args} />;
