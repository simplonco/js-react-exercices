import React from 'react';
import logo from './logo.svg';

const Header = (props) => <div className="App-header" style={props.objStyle}>
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Coloring input</h2>
</div>;

export default Header;
