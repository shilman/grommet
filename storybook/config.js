import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import grommetLight from './theme.js';

addDecorator(
  withOptions({
    theme: grommetLight,
  }),
);

configure(
  require.context('../src/js', true, /\.stories\.js$|\/stories\/.*\.js$/),
  module,
);
