import { AreaGraphData } from "./recharts";

export type Quantity = number;
export type Rate = string;

export interface ExchangeQuantity {
  name: string;
  Quantity: Quantity;
}

export type CombinedOrder = [Rate, Array<ExchangeQuantity>];

export type CombinedOrderbook = {
  asks: Array<CombinedOrder>;
  bids: Array<CombinedOrder>;
}

export type OrderbookDataPoint = {
  name: Rate,
  asks: Array<Quantity>,
  bids: Array<Quantity>,
}

export type CombinedOrderbookGraphData = Array<OrderbookDataPoint>
