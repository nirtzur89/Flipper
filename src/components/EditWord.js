import React from 'react';
import { connect } from 'react-redux';
import WordForm from './WordForm';
import { editNote, removeNote } from '../actions/notes';

const EditWord = props => {
  return (
    <div>
      <h3> Edit Page:</h3>
      <WordForm
        note={props.note}
        onSubmit={note => {
          props.dispatch(editNote(props.note.id, note));
          props.history.push('/words');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeNote({ id: props.note.id }));
          props.history.push('/words');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find(note => note.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditWord);
