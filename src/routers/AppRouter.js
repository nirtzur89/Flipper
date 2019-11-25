import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Help from '../components/Help';
import Home from '../components/Home';
import WordsList from '../components/WordsList';
import EditWord from '../components/EditWord';
import AddWords from '../components/AddWords';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/add' component={AddWords} exact={true} />
        <Route path='/words' component={WordsList} exact={true} />
        <Route path='/words/:id' component={EditWord} />
        <Route path='/contact' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
