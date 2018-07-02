// tslint:disable:no-console
import { debounce } from 'lodash';
import * as R from 'ramda';
import { create, env } from 'sanctuary';
// import $ from 'sanctuary-def';

// const withNs = R.concat('crypto-orderbook-app/');

const S: object = create({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: env.concat([]),
});

const isTrue = R.equals(true);
const toFixed = (num: number) => (x: any) => x.toFixed(num);
const notNil = R.complement(R.isNil);
const trace = (label: string) => (x: any) => {
  console.log('=================');
  console.log(label);
  console.log(x);
  return x;
};

export default {
  // ALL THE RAMDAS
  ...R,
  // NOTE: Just want the Monads from sanctuary
  ...R.pick([
    'either',
    'Right',
    'left',
  ])(S),
  debounce,
  isTrue,
  notNil,
  toFixed,
  trace,
};
