import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { grommet } from 'grommet/themes';
import { AnnounceContext, Box, Grommet, Heading, Text } from 'grommet';

class Announcer extends Component {
  static propTypes = {
    announce: PropTypes.func.isRequired,
    message: PropTypes.string,
    mode: PropTypes.string,
    role: PropTypes.string,
  };

  static defaultProps = {
    message: 'Here is a simple announcement. This will soon disappear',
    mode: 'polite',
    role: 'log',
  };

  componentDidMount() {
    const { announce, message, mode } = this.props;
    const timeout = 3000;
    announce(message, mode, timeout);
  }

  render() {
    const { message, mode, role } = this.props;
    return (
      <Text align="center" role={role} aria-live={mode}>
        {message}
      </Text>
    );
  }
}

const AnnounceContextComponent = props => (
  <Grommet theme={grommet} full>
    <Box justify="center" align="center" background="brand" fill>
      <Heading>Welcome to announcement section</Heading>
      <AnnounceContext.Consumer>
        {announce => <Announcer announce={announce} {...props} />}
      </AnnounceContext.Consumer>
    </Box>
  </Grommet>
);

export default {
  title: 'AnnounceContext',
};

export const polite = () => <AnnounceContextComponent />;

polite.story = {
  name: 'Polite',
};

export const assertive = () => (
  <AnnounceContextComponent
    message="Turn on Accessibility feature to listen to this announcement. This will soon disappear"
    mode="assertive"
    role="alert"
  />
);

assertive.story = {
  name: 'Assertive',
};
