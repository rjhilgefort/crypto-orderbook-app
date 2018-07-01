import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Orderbook from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Orderbook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
