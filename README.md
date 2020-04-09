# Storybook Addon RAW styled-component 💅🏻

This addon for Storybook adds a tab that displays the compiled HTML for each
story. It uses [highlight.js](https://highlightjs.org/) for syntax highlighting.

## 🌎 Demo
[Storybook Addon RAW styled-component](https://storybook-addon-raw-styled-component.netlify.com/)

## 🔥 Getting Started

```sh
npm i --save-dev @khriztianmoreno/storybook-addon-raw-styled-component
```

### 📝 Register addon

Create a file called `addons.js` inside the `.storybook` directory and add the
following content:

```js
// .storybook/main.js

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    ..., // Others addon
    '@khriztianmoreno/storybook-addon-raw-styled-component/register'
  ],
};
```

## 👨🏼‍💻 Usage

Add `withHTML` as a global decorator inside `.storybook/config.js`:

```js
// .storybook/preview.js

import { addDecorator } from '@storybook/html';
import { withHTML } from '@khriztianmoreno/storybook-addon-raw-styled-component';

addDecorator(withHTML);
```

The HTML is formatted with Prettier. You can override the Prettier config
(except `parser` and `plugins`) by providing an object following the
[Prettier API override format](https://prettier.io/docs/en/options.html):

```js
// .storybook/preview.js

import { addDecorator } from '@storybook/html';
import { withHTML } from '@khriztianmoreno/storybook-addon-raw-styled-component';

addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  }),
);
```

## 🎗 Supported frameworks

Right now, the addon can be used with React.js framework
