import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote, editNote, removeNote } from './actions/notes';
import { setFamilyFilter, sortByFamily } from './actions/filters';
import getVisibleNotes from './selectors/notes';

const store = configureStore();
const firstNote = store.dispatch(
  addNote({
    word: 'maus',
    translation: 'mouse',
    createdAt: 150000,
    family: 'animals'
  })
);
const secondNote = store.dispatch(
  addNote({
    word: 'haus',
    translation: 'house',
    createdAt: 1500,
    family: 'objects'
  })
);

// store.dispatch(removeNote({ id: firstNote.note.id }));

// store.dispatch(editNote(secondNote.note.id, { derdie: 'das' }));

store.dispatch(setFamilyFilter('animals'));

store.dispatch(sortByFamily());

store.dispatch(setFamilyFilter(''));

const state = store.getState();
const visibleNotes = getVisibleNotes(state.notes, state.filters);
console.log(visibleNotes);
ReactDOM.render(<AppRouter />, document.getElementById('app'));
