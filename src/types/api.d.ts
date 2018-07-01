import { CombindedOrderbook } from './combined-orderbook';

export interface OrderbookFetchParams {
  market: string;
}

export interface OrderbookFetchResponse {
  data: CombindedOrderbook;
}

