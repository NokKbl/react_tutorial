import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Todolist from './pages/Todolist';
import Employee from './pages/Employee';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Todolist} />
          <Route exact path='/employee' component={Employee} / >
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
