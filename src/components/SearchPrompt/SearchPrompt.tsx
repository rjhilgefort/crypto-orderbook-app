import * as React from 'react';
import { Message } from 'semantic-ui-react'

const SearchPrompt: React.SFC<void> = () => (
  <Message
    icon='searchengin'
    header='Nothing To Show!'
    content='Try searching by typing a market abbreviation in the search box ("BTC-ETC")'
  />
);

export default SearchPrompt;

