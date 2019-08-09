import React from 'react';

import { Add } from 'grommet-icons';

import { Anchor, Box, Grommet, Paragraph } from 'grommet';
import { grommet } from 'grommet/themes';

export default {
  title: 'Anchor',
};

export const defaultStory = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Anchor href="#">Link</Anchor>
    </Box>
  </Grommet>
);

defaultStory.story = {
  name: 'Default',
};

export const colors = () => (
  <Grommet theme={grommet}>
    <Box pad="medium" gap="medium">
      <Anchor icon={<Add />} href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor label="Add" href="#" />
    </Box>
    <Box background="dark-1" pad="medium" gap="medium">
      <Anchor icon={<Add />} href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor label="Add" href="#" />
    </Box>
  </Grommet>
);

colors.story = {
  name: 'Colors',
};

export const sizeStory = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(size => (
        <Box key={size} margin="small">
          <Anchor size={size} label={size} href="#" />
        </Box>
      ))}
    </Box>
  </Grommet>
);

sizeStory.story = {
  name: 'Size',
};

export const disabled = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box margin="small">
        <Anchor disabled label="Disabled Anchor" />
      </Box>
    </Box>
  </Grommet>
);

disabled.story = {
  name: 'Disabled',
};

export const inline = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Paragraph>
        This is <Anchor label="an inline link" href="#" /> with surrounding
        text.
      </Paragraph>
    </Box>
  </Grommet>
);

inline.story = {
  name: 'Inline',
};
