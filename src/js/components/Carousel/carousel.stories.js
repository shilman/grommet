import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { Grommet, Box, Carousel } from 'grommet';

const SimpleCarousel = ({ initialChild }) => (
  <Grommet>
    <Box align="center" pad="large">
      <Carousel initialChild={initialChild}>
        <Box pad="xlarge" background="accent-1">
          <Attraction size="xlarge" />
        </Box>
        <Box pad="xlarge" background="accent-2">
          <TreeOption size="xlarge" />
        </Box>
        <Box pad="xlarge" background="accent-3">
          <Car size="xlarge" />
        </Box>
      </Carousel>
    </Box>
  </Grommet>
);

export default {
  title: 'Carousel',
};

export const simple = () => <SimpleCarousel />;

simple.story = {
  name: 'Simple',
};

export const initialChild = () => <SimpleCarousel initialChild={1} />;

initialChild.story = {
  name: 'Initial child`',
};
