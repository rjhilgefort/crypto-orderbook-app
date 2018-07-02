// tslint:disable:no-console
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { Grid } from 'semantic-ui-react'
import { CombinedOrderbookGraphData_New } from 'src/types/combined-orderbook';
import { IPromiseState } from 'src/types/react-refetch';
import _ from 'src/utils';
import { GridStyled } from './style';

export interface IProps {
  orderbookFetch: IPromiseState<CombinedOrderbookGraphData_New>;
}
const Orderbook: React.SFC<IProps> = ({ orderbookFetch }) => (
  <GridStyled>
    <Grid.Row>
      <AreaChart
        width={1000} height={600}
        margin={{ bottom: 20 }}
        data={orderbookFetch.value}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis
          label={{ value: 'Rate', position: 'bottom', offset: 0 }}
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
        <Legend verticalAlign="top" height={36}/>
        <Area
          name='Asks'
          dataKey='asks'
          type='monotone'
          stroke='green'
          fill='green'
        />
        <Area
          name='Bids'
          dataKey='bids'
          type='monotone'
          stroke='red'
          fill='red'
        />
      </AreaChart>
    </Grid.Row>
  </GridStyled>
);

export default Orderbook;
