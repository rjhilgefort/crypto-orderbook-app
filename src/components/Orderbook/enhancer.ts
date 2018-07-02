import { connect } from 'react-refetch';
import { compose } from 'recompose';
import withLoading from 'src/hoc/withLoading';
import { CombinedOrderbook, CombinedOrderbookGraphData_New } from 'src/types/combined-orderbook';
import _ from 'src/utils';

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

type CombinedOrderbookToGraphData = (x: CombinedOrderbook) => CombinedOrderbookGraphData_New;
const combinedOrderbookToGraphData: CombinedOrderbookToGraphData =
  // @ts-ignore
  _.compose(
    _.trace('reduce'),
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

export default compose(
  connect(() => ({
    orderbookFetch: {
      refreshInterval: 5000,
      then: _.compose(
        _.objOf('value'),
        combinedOrderbookToGraphData,
        _.prop('data'),
      ),
      url: 'http://localhost:4040/orderbook?market=BTC-ETH',
    },
  })),
  withLoading(
    _.pathSatisfies(_.isTrue, ['orderbookFetch', 'pending'])
  ),
);
