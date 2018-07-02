import { connect } from 'react-refetch';
import { branch, compose, renderComponent } from 'recompose';
import ErrorMessage from 'src/components/ErrorMessage';
import SearchPrompt from 'src/components/SearchPrompt';
import withLoading from 'src/hoc/withLoading';
import _ from 'src/utils';

export default compose(
  branch(
    _.pathSatisfies(_.anyPass([_.isNil, _.isEmpty]), ['market']),
    renderComponent(SearchPrompt),
  ),
  connect(({ market }: { market: string }) => ({
    orderbookFetch: {
      refreshInterval: 5000,
      url: `http://localhost:4040/orderbook?market=${market}`,
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
