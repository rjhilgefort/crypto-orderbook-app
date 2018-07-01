import * as React from 'react';
import * as SUI from 'semantic-ui-react';
import Logo from 'src/components/Logo';
import { Wrapper } from './style';

const Menu = () => (
  <Wrapper>
    <SUI.Menu
      fixed='top'
      inverted={true}
      size='massive'
    >
      <SUI.Menu.Item>
        <Logo />
      </SUI.Menu.Item>
      <SUI.Menu.Item header={true} active={true}>
        Crypto Orderbook
      </SUI.Menu.Item>
    </SUI.Menu>
  </Wrapper>
);

export default Menu;
