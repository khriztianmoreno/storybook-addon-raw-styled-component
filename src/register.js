import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';

import Panel from './Panel';

addons.register('khriztianmoreno/rawStyledComponent', () => {
  addons.add('markup/panel', {
    title: 'RAW styled-component',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    ),
  });
});
