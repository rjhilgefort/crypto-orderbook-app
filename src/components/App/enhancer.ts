import { compose, withStateHandlers } from 'recompose';

export default compose(
  withStateHandlers(
    ({ initialMarket }: { initialMarket: string }) => ({
      market: initialMarket,
    }),
    {
      updateMarket: ({ market }: { market: string }) => (value: string) => ({
        market: value
      }),
    }
  ),
);
