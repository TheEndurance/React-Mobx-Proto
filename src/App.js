import React, { Component } from 'react';
import GenericList from './components/GenericList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GenericList store={this.props.store}></GenericList>
      </div>
    );
  }
}

export default App;
