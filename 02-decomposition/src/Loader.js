import React from 'react';
import logo from './logo.svg';

const Loader = (WrappedComponent, loading) => {

  return (loading) ?
    <img src={logo} className="App-logo" alt="logo" />
    : <WrappedComponent/>;

};

export default Loader;
