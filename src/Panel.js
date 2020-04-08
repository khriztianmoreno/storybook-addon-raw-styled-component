import React, { Fragment } from 'react';
import { useChannel, useAddonState } from '@storybook/api';
import { styled } from '@storybook/theming';

import SyntaxHighlighter from './SyntaxHighlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import { format as prettierFormat } from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';

import { EVENT_CODE_RECEIVED } from './shared';

const PRETTIER_CONFIG = {
  html: {
    parser: 'html',
    plugins: [prettierHtml],
  },
  css: {
    parser: 'css',
    plugins: [prettierHtml],
  },
};

const Title = styled('h2')`
  background-color: #1fa7ff;
  border: 1px solid #1fa7ff;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding-left: 13px !important;
  padding: 3px;
`;

const HTMLPanel = () => {
  const [state, setState] = useAddonState(EVENT_CODE_RECEIVED, {
    code: '',
    css: '',
  });
  useChannel({
    [EVENT_CODE_RECEIVED]: ({ html, css, options }) => {
      const { prettier = {} } = options;
      const prettierConfigHTML = {
        ...prettier,
        ...PRETTIER_CONFIG.html,
      };
      const code = prettierFormat(html, prettierConfigHTML);
      const styles = css.includes('{') ? css : '';
      setState({ code, css: styles });
    },
  });
  return (
    <Fragment>
      {state.code !== '' ? (
        <Fragment>
          <Title>
            <span>HTML 💻</span>
          </Title>
          <SyntaxHighlighter
            language={'html'}
            copyable={true}
            padded={true}
            style={style}
          >
            {state.code}
          </SyntaxHighlighter>
        </Fragment>
      ) : null}
      {state.code !== '' ? (
        <Fragment>
          <Title>
            <span>CSS 💅🏻</span>
          </Title>
          <SyntaxHighlighter
            language={'css'}
            copyable={true}
            padded={true}
            style={style}
          >
            {state.css}
          </SyntaxHighlighter>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default HTMLPanel;
