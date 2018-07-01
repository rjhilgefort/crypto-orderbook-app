import * as React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const Loading: React.SFC<void> = () => (
  <Dimmer active={true}>
    <Loader size='massive' />
  </Dimmer>
);

export default Loading;
