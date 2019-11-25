import React from 'react';
import { connect } from 'react-redux';
import WordsListItem from './WordsListItem';
import selectNotes from '../selectors/notes';
import WordsListFilters from './WordsListFilters';

const WordsList = props => (
  <div>
    <WordsListFilters />
    <h3>your words:</h3>
    {props.notes.map(note => {
      return <WordsListItem key={note.id} {...note} />;
    })}
  </div>
);
const mapStateToProps = state => {
  return {
    notes: selectNotes(state.notes, state.filters)
  };
};

export default connect(mapStateToProps)(WordsList);
