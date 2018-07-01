import { connect } from 'react-refetch';
import { compose } from 'recompose';
import withLoading from 'src/hoc/withLoading';
import _ from 'src/utils';

export default compose(
  connect(() => ({
    orderbookFetch: {
      refreshInterval: 5000,
      url: 'http://localhost:4040/orderbook?market=BTC-ETH',
    },
  })),
  withLoading(
    _.pathSatisfies(_.isTrue, ['orderbookFetch', 'pending'])
  ),
);
