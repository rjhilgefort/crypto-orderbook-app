// tslint:disable:no-console
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { Grid } from 'semantic-ui-react'
import { CombinedOrderbook } from 'src/types/combined-orderbook';
import { IPromiseState } from 'src/types/react-refetch';
import _ from 'src/utils';
import { GridStyled } from './style';

// TODO: Move to own thing
const Graph = ({
  title,
  data,
}: {
  title: string,
  data: object[],
}) => (
  <React.Fragment>
    <h1>{title}</h1>
    <AreaChart
      width={1000} height={600}
      data={data}
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
  </React.Fragment>
);

export interface IProps {
  orderbookFetch: IPromiseState<CombinedOrderbook>;
}
const Orderbook: React.SFC<IProps> = ({ orderbookFetch }) => (
  <GridStyled>
    <Grid.Row>
      <Graph
        title="Bids"
        data={orderbookFetch.value.bids}
      />
    </Grid.Row>
    <Grid.Row>
      <Graph
        title="Asks"
        data={orderbookFetch.value.asks}
      />
    </Grid.Row>
  </GridStyled>
);

export default Orderbook;
