import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import BartTimesPage from './pages/BartTimesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact='/' component={BartTimesPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
