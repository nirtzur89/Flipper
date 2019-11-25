import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

store.dispatch(
  addNote({
    word: 'toll',
    translation: 'nice',
    createdAt: 10000,
    family: 'adjectives'
  })
);

const state = store.getState();
const visibleNotes = getVisibleNotes(state.notes, state.filters);
console.log(visibleNotes);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
