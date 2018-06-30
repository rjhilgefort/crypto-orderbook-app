import * as React from 'react';
import {
  Header, Intro, Logo, Title, Wrapper
} from './App.style';
import logo from './logo.svg';

const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt='logo'/>
      <Title>Welcome to React</Title>
    </Header>
    <Intro>
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </Intro>
  </Wrapper>
);

export default App;
