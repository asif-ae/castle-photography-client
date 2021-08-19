import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route to="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
