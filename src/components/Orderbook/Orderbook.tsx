// tslint:disable:no-console
import * as React from 'react';
import { Grid } from 'semantic-ui-react'
import { OrderbookFetchResponse } from 'src/types/api';
import { IPromiseState } from 'src/types/react-refetch';
import { GridStyled } from './style';

export interface IProps {
  orderbookFetch: IPromiseState<OrderbookFetchResponse>;
}
const Orderbook: React.SFC<IProps> = ({ orderbookFetch }) => (
  <GridStyled>
    {console.log(orderbookFetch)}
    {console.log(orderbookFetch.value.data.bids)}
    {console.log(orderbookFetch.value.data.asks)}
    <Grid.Row>
      {JSON.stringify(orderbookFetch.value.data)}
    </Grid.Row>
  </GridStyled>
);

export default Orderbook;
