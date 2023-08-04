import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SignUp } from './SignUp';

export default {
  title: 'Atoms/SignUp',
  component: SignUp,
} as Meta<typeof SignUp>;

export const Default: StoryFn<typeof SignUp> = (args) => <SignUp {...args} />;