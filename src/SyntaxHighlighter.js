import React, { Component } from 'react';
import { styled } from '@storybook/theming';

import { ActionBar } from '@storybook/components/dist/ActionBar/ActionBar';

import ReactSyntaxHighlighter from 'react-syntax-highlighter';

const Wrapper = styled.div(
  ({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    color: theme.color.defaultText,
    marginBottom: '15px',
    border: '1px solid #4c4c4d',
    borderTop: 'none',
  }),
  ({ theme, bordered }) =>
    bordered
      ? {
          border: `1px solid ${theme.appBorderColor}`,
          borderRadius: theme.borderRadius,
          background: theme.background.content,
        }
      : {},
);

const Pre = styled.pre(({ theme, padded }) => ({
  display: 'flex !important',
  justifyContent: 'flex-start',
  margin: 0,
  padding: padded ? `${theme.layoutMargin}px !important` : 0,
  tabSize: '2',
}));

const Code = styled.code`
  flex: 1;
  padding-right: 0;
  opacity: 1;
  counter-reset: line;

  .code-line {
    counter-increment: line;
    position: relative;
    display: block;
    margin-left: 1.5rem;
  }

  .code-line:before {
    content: counter(line);
    position: absolute;
    margin-left: -1.5rem;
    color: #000;
  }
`;

export default class SyntaxHighlighter extends Component {
  static defaultProps = {
    language: null,
    copyable: false,
    bordered: false,
    padded: false,
    format: true,
    className: null,
  };

  state = { copied: false };

  onClick = e => {
    const { children } = this.props;

    e.preventDefault();
    const tmp = document.createElement('TEXTAREA');
    const focus = document.activeElement;

    tmp.value = children;

    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    focus.focus();

    this.setState({ copied: true }, () => {
      window.setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const {
      children,
      language = 'html',
      copyable,
      bordered,
      padded,
      className,
      ...rest
    } = this.props;
    const { copied } = this.state;
    return children ? (
      <Wrapper bordered={bordered} padded={padded} className={className}>
        <ReactSyntaxHighlighter
          padded={padded || bordered}
          language={language}
          useInlineStyles={true}
          PreTag={Pre}
          CodeTag={Code}
          showLineNumbers={false}
          wrapLines={true}
          lineProps={{ className: 'code-line' }}
          {...rest}
        >
          {children.trim()}
        </ReactSyntaxHighlighter>
        {copyable ? (
          <ActionBar
            actionItems={[
              { title: copied ? 'Copied' : 'Copy', onClick: this.onClick },
            ]}
          />
        ) : null}
      </Wrapper>
    ) : null;
  }
}
