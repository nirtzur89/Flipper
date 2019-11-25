import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../actions/notes';

const WordsListItem = ({ word, translation, family, id, dispatch }) => (
  <div>
    <h4>{word}</h4>
    <p>
      meaning: {translation} - family: {family}
    </p>
    <button
      onClick={() => {
        dispatch(removeNote({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(WordsListItem);
