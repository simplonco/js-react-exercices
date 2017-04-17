import React from 'react';
import logo from './logo.svg';

const Header = (props) =>
<div>
  <div className="App-header" style={props.objStyle}>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Coloring input</h2>
  </div>
  <p className="App-intro">
    Quand je clique sur un element de la liste ci-dessous, je change la couleur de fond du header
  </p>
</div>;

export default Header;
