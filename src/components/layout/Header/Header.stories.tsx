import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as Meta<typeof Header>;

export const Default: StoryFn<typeof Header> = (args) => <Header {...args} />;
