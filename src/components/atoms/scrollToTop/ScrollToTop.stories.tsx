import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ScrollToTop } from './ScrollToTop';

export default {
  title: 'Atoms/ScrollToTop',
  component: ScrollToTop,
  args: {
    isVisible: false
  }
} as Meta<typeof ScrollToTop>;

export const Default: StoryFn<typeof ScrollToTop> = (args) => <ScrollToTop {...args} />;