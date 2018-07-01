import { connect } from 'react-refetch';
import { compose } from 'recompose';
import withLoading from 'src/hoc/withLoading';
import _ from 'src/utils';

const exchangeQuantitiesToGraphData =
  _.compose(
    _.evolve({
      value: _.map(_.prop('Quantity')),
    }),
    _.zipObj(['name', 'value'])
  );

export default compose(
  connect(() => ({
    orderbookFetch: {
      refreshInterval: 5000,
      then: _.compose(
        _.objOf('value'),
        _.map(_.map(exchangeQuantitiesToGraphData)),
        _.prop('data'),
      ),
      url: 'http://localhost:4040/orderbook?market=BTC-ETH',
    },
  })),
  withLoading(
    _.pathSatisfies(_.isTrue, ['orderbookFetch', 'pending'])
  ),
);
