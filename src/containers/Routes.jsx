import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Board from './Board';

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        <Header />
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </Route>
      <Redirect
        from="/"
        to="/board"
      />
    </Router>
  );
};

export default Routes;
