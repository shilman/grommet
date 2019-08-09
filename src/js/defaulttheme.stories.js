import React from 'react';

import { base } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import { Box, extendDefaultTheme } from 'grommet';

extendDefaultTheme(
  deepMerge(base, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  }),
);

const CustomDefaultProps = () => (
  <Box background="brand" pad="small">
    Hello
  </Box>
);

export default {
  title: 'DefaultThemeComponents',
};

export const defaultTheme = () => <CustomDefaultProps />;

defaultTheme.story = {
  name: 'Default Theme',
};
