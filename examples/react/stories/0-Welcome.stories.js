import React from 'react';

import {
  DemoOne,
  DemoTwo,
  DemoThree,
} from './Demos';

export default {
  title: 'Storybook Addon RAW styled-component',
};

export const First = () => <DemoOne />;

export const Second = () => <DemoTwo />;

export const Third = () => <DemoThree />;
