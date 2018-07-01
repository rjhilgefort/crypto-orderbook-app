import * as React from 'react';
import { Container } from 'semantic-ui-react'
import Menu from 'src/components/Menu';
import Orderbook from 'src/components/Orderbook';

const App = () => (
  <Container>
    <Menu />
    <Orderbook />
  </Container>
);

export default App;
