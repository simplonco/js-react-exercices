import React from 'react';
import AddColorForm from './AddColorForm';
import Header from './Header';
import ColorList from './ColorList';

export default class ColorApp extends React.Component {

  state = {
    objStyle : {backgroundColor: 'blue'},
    colors : [
      {id:1, name:'violet', color:'#f5aafb'},
      {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
      {id:3, name:'pale green', color:'#aafbde'},
      {id:4, name:'vermillon', color:'#fe532e'},
      {id:5, name:'sky blue', color:'#82c4fa'},
      {id:6, name:'salmon', color:'#fb8b8b'},
    ],
    new: {
      name: '',
      color: ''
    }
  };

  componentDidMount() {
    const stateFromLocal = localStorage.getItem('state');
    stateFromLocal && this.setState(() => JSON.parse(stateFromLocal));
  }

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state.colorState);
  }

  getNextId = () => {
    return this.state.colorState.colors.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
  }

  changeColor = (col) => {
    this.setState({
      colorState: {...this.state.colorState, objStyle : {backgroundColor: col}}
    });
  }

  addHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newColor  = { ...this.state.colorState.new, id: this.getNextId() };

    this.setState({
      colors : [ ...this.state.colorState.colors, newColor]
    });
  }

  handleNewChange = (key, value) => {
    this.setState({
      new : { ...this.state.colorState.new, [key]: value}
    });
  }

  render() {
    return (
      <div className="App">
        <Header objStyle={this.state.objStyle} />
        <div className="container">
          <ColorList
            colors={this.state.colors}
            changeColor={this.changeColor}/>
          <AddColorForm
            addHandler={this.addHandler}
            handleNewChange={this.handleNewChange}
            newColor={this.state.new}
          />
      </div>
    </div>);
  }
}
