import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import Loader from './Loader';
import ColorApp from './ColorApp';

const LoadingApp = (props) => Loader(ColorApp, props.loading);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    setTimeout(this.isReady, 1000);

  }

  isReady = () => {
    this.setState({
      loading: false
    });
  }

  render() {
    return <LoadingApp loading={this.state.loading}/>;
  }
}

export default App;
