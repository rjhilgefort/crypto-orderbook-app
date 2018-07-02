// TODO: Ramda and typescript don't get along
//       `name` is not optional
export interface AreaGraphDataPoint {
  name?: string;
  value?: number[];
}

export type AreaGraphData = Array<AreaGraphDataPoint>
