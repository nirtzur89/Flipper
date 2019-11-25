import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import WordForm from './WordForm';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const AddWords = props => (
  <div>
    <h3>Add A New Word:</h3>
    <WordForm
      onSubmit={note => {
        props.dispatch(addNote(note));
        props.history.push('/words');
      }}
    />
  </div>
);

export default connect()(AddWords);
