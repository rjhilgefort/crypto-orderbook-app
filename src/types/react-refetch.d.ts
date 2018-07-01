type Meta = {
  request: any,
  response: any,
  component?: any
};
export interface IPromiseState<V> {
  fulfilled: boolean;
  meta: Meta;
  pending: boolean;
  reason?: string;
  refreshing: boolean;
  rejected: boolean;
  settled: boolean;
  value: V;
}
