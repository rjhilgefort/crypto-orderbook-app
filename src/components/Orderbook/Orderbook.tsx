// tslint:disable:no-console
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { Grid } from 'semantic-ui-react'
import { CombinedOrderbook, CombinedOrderbookGraphData } from 'src/types/combined-orderbook';
import { IPromiseState } from 'src/types/react-refetch';
import _ from 'src/utils';
import { GridStyled } from './style';

const getQuantitiesValues = _.compose(
  _.when(
    _.compose(_.equals(1),_.length),
     // @ts-ignore
    _.compose(_.repeat(_.__, 2), _.head)
  ),
  _.map(_.prop('Quantity'))
);

const ordersByBook = _.reduce(
  (valuesAcc, [book,, quantities]) =>
    _.assoc(book, getQuantitiesValues(quantities), valuesAcc), {}
);

type CombinedOrderbookToGraphData = (x: CombinedOrderbook) => CombinedOrderbookGraphData;
const combinedOrderbookToGraphData: CombinedOrderbookToGraphData =
  // @ts-ignore
  _.compose(
    _.reduce(
      // @ts-ignore
      (pointAcc, [rate, orders]) => _.append({
        name: rate,
        ...ordersByBook(orders),
      }, pointAcc),
      [],
    ),
    // @ts-ignore
    _.sortBy(_.nth(0)),
    _.toPairs,
    // @ts-ignore
    _.groupBy(_.nth(1)),
    _.chain(([book, orders]) => _.map(_.prepend(book), orders)),
    _.toPairs,
  );

export interface IProps {
  orderbookFetch: IPromiseState<CombinedOrderbookGraphData>;
}
const Orderbook: React.SFC<IProps> = ({ orderbookFetch }) => {
  // @ts-ignore
  const { data } = _.evolve({ data: combinedOrderbookToGraphData })(orderbookFetch.value);
  return (
    <GridStyled>
      <Grid.Row>
        <AreaChart
          width={1000} height={600}
          margin={{ bottom: 20 }}
          data={data}
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
};

export default Orderbook;
