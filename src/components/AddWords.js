import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import WordForm from './WordForm';

const AddWords = () => (
  <div>
    <h3>Add A New Word:</h3>
    <WordForm />
  </div>
);

export default AddWords;
