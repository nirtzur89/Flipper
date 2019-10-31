import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Help from '../components/Help';
import Home from '../components/Home';
import Words from '../components/Words';
import Word from '../components/Word';
import AddWords from '../components/AddWords';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/add' component={AddWords} exact={true} />
        <Route path='/words' component={Words} exact={true} />
        <Route path='/words/:id' component={Word} />
        <Route path='/contact' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
