import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form store={this.props.store}/>
      </div>
    );
  }
}

export default App;
