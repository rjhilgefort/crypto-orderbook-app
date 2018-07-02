import { connect } from 'react-refetch';
import { branch, compose, renderComponent } from 'recompose';
import ErrorMessage from 'src/components/ErrorMessage';
import SearchPrompt from 'src/components/SearchPrompt';
import withLoading from 'src/hoc/withLoading';
import _ from 'src/utils';

const HOST = process.env.REACT_APP_HOST || 'crypto-orderbook-api.now.sh';

export default compose(
  branch(
    _.pathSatisfies(_.anyPass([_.isNil, _.isEmpty]), ['market']),
    renderComponent(SearchPrompt),
  ),
  connect(({ market }: { market: string }) => ({
    orderbookFetch: {
      refreshInterval: 5000,
      url: `http://${HOST}/orderbook?market=${market}`,
    },
  })),
  withLoading(
    _.pathSatisfies(_.isTrue, ['orderbookFetch', 'pending'])
  ),
  branch(
    _.pathSatisfies(_.notNil, ['orderbookFetch', 'value', 'error']),
    renderComponent(ErrorMessage),
  ),
);
