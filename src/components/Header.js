import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>FLIPPER</h1>
    <NavLink to='/' activeClassName='active-nav' exact={true}>
      Home
    </NavLink>
    <NavLink to='/add' activeClassName='active-nav' exact={true}>
      Add Words
    </NavLink>
    <NavLink to='/words' activeClassName='active-nav' exact={true}>
      My Words
    </NavLink>
    <NavLink to='/help' activeClassName='active-nav'>
      Help Me
    </NavLink>
  </div>
);

export default Header;
