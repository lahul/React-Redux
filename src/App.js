import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Add from './Add'
import { Route } from 'react-router-dom';

const Routes = () => {
    return (
      <>
      <Route exact path="/" component={Form} />
      <Route exact path="/add" component={Add}/>
      </>
      /*
      <div className="App">
        <Form store={this.props.store}/>
      </div>*/
    )
}

export default Routes;
