import * as React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react'
import Menu from 'src/components/Menu';
import Orderbook from 'src/components/Orderbook';
import { InputStyled } from './style';

const SearchIcon = () => (
  <Icon name='search' inverted={true} circular={true} />
);

export interface IProps {
  market: string;
  updateMarket: () => void;
}
const App: React.SFC<IProps> = ({ market, updateMarket }) => {
  // TODO: Should debounce this
  // @ts-ignore
  const inputOnChange = (e: any) => { updateMarket(e.target.value); }
  return (
    <Container>
      <Menu />
      <Grid centered={true} columns={2}>
        <Grid.Column textAlign={'center'}>
          <InputStyled
            placeholder='BTC-ETC, BTC_DOGE, btc-zrx, etc...'
            size='big'
            onChange={inputOnChange}
            value={market}
            icon={SearchIcon}
            iconPosition='left'
          />
        </Grid.Column>
      </Grid>
      <Orderbook market={market}/>
    </Container>
  );
};

export default App;
