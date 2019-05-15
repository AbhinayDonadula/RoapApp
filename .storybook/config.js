import { configure, addParameters, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';
import '../static/css/app.css';

addDecorator(withInfo);

addParameters({
  viewport: { defaultViewport: 'desktop' },
  options: {
    name: 'Roap App',
    isFullscreen: false,
    showPanel: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true
    // more configuration here
  }
});

function loadStories() {
  const req = require.context('../app/components/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
