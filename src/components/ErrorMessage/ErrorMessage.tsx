import * as React from 'react';
import { Message } from 'semantic-ui-react'

const ErrorMessage: React.SFC<void> = () => (
  <Message
    negative={true}
    icon='warning circle'
    header='Not Found!'
    content='Market symbol not recognized! Please try again.'
  />
);

export default ErrorMessage;

