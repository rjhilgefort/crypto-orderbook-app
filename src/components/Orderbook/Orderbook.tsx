// tslint:disable:no-console
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { Grid } from 'semantic-ui-react'
import { CombinedOrderbook } from 'src/types/combined-orderbook';
import { IPromiseState } from 'src/types/react-refetch';
import _ from 'src/utils';
import { GridStyled } from './style';

export interface IProps {
  orderbookFetch: IPromiseState<CombinedOrderbook>;
}
const Orderbook: React.SFC<IProps> = ({ orderbookFetch }) => (
  <GridStyled>
    <Grid.Row>
      <AreaChart
        width={1000} height={600}
        data={orderbookFetch.value.bids}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis
          label="Rate"
          tickFormatter={_.take(6)}
          domain={['dataMin - 0.005', 'dataMax + 0.005']}
          dataKey="name"
        />
        <YAxis
          label="Quantity"
          tickFormatter={_.toFixed(0)}
          domain={['dataMin - 5', 'dataMax + 20']}
        />
        <Tooltip/>
        <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </Grid.Row>
  </GridStyled>
);

export default Orderbook;
