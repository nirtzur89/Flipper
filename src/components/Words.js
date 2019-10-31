import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Words = () => (
  <div>
    <p>These are my Words:</p>
    <Link to='/Words/1'>project 1</Link>
    <Link to='/Words/2'>project 2</Link>
  </div>
);

export default Words;
