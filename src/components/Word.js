import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Word = props => <div>This is Word number {props.match.params.id}</div>;

export default Word;
