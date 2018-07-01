import * as React from 'react';
import { Wrapper } from './Logo.style';
import logo from './logo.svg';

const Logo = () => (
  <Wrapper src={logo} alt='logo' />
);

export default Logo;
