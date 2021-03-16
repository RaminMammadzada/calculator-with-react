import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
