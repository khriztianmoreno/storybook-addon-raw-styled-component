import React, { useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { EVENT_CODE_RECEIVED } from '../shared';
import { parameters } from '.';

const Wrapper = ({ setCode, children }) => {
  useEffect(() => {
    let styleTags = '';
    let html = '';
    const sheet = new ServerStyleSheet();
    try {
      html = renderToString(sheet.collectStyles(children));
      styleTags = sheet.getStyleTags();
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }
    setCode({ html, css: styleTags });
  });
  return <div>{children}</div>;
};

export const withHTML = makeDecorator({
  ...parameters,
  wrapper: (getStory, _, { options = {} }) => {
    const channel = addons.getChannel();
    return (
      <Wrapper
        setCode={({ html, css }) => {
          channel.emit(EVENT_CODE_RECEIVED, { html, css, options });
        }}
      >
        {getStory()}
      </Wrapper>
    );
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
