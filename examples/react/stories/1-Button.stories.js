import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Button } from '@storybook/react/demo';
import styled from 'styled-components'

export default {
  title: 'Button',
  decorators: [withKnobs],
};

const ListItem = styled('div')`
  background: white;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  height: 3rem;
  line-height: 20px;
  transition: all ease-out 150ms;
  width: 100%;
`

const Anchor = styled('a')`
  font-size: 24px;
  color: darkblue;
`

export const withText = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const withEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withKnobsAddon = () => (
  <Button onClick={action('clicked')}>{text('Label', 'Custom label')}</Button>
);

export const withStyledComponents = () => (
  <ListItem>
    <p>Hello ListItem</p>
    <Anchor
      href="http://khriztianmoreno.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      khriztianmoreno
    </Anchor>
  </ListItem>
);
