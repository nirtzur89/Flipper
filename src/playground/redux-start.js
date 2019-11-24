import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//actions:
//ADD_NOTE
const addNote = ({
  word = '',
  translation = '',
  derdie = '',
  family = '',
  createdAt = 0
} = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuid(),
    word,
    translation,
    derdie,
    family,
    createdAt
  }
});
//REMOVE_NOTE
const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
});
//EDIT_NOTE
const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});
//SORT_BY_FAMILY
const setFamilyFilter = (family = '') => ({
  type: 'FAMILY_FILTER',
  family
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
//SORT_BY_FAMILYS
const sortByFamily = () => ({
  type: 'SORT_BY_FAMILY'
});
//SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});
//SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
//Notes reducer
const notesReducerDefaultState = [];
const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.note];
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_NOTE':
      return state.map(note => {
        if (note.id === action.id) {
          return { ...note, ...action.updates };
        } else {
          return note;
        }
      });
    default:
      return state;
  }
};

//Filters reducer
const filtersReducerDefaultState = {
  family: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'FAMILY_FILTER':
      return {
        ...state,
        family: action.family
      };
    case 'SORT_BY_FAMILY':
      return {
        ...state,
        sortBy: 'family'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
//get visible notes
const getVisibleNotes = (notes, { family, sortBy, startDate, endDate }) => {
  return notes
    .filter(note => {
      const startDateMatch =
        typeof startDate !== 'number' || note.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || note.createdAt <= endDate;
      const familyMatch = note.family
        .toLowerCase()
        .includes(family.toLowerCase());

      return startDateMatch && endDateMatch && familyMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'family') {
        return a.family > b.family ? 1 : -1;
      }
    });
};

//Store Creation
const store = createStore(
  combineReducers({
    notes: notesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleNotes = getVisibleNotes(state.notes, state.filters);
  console.log(visibleNotes);
});

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

const flipperState = {
  words: [
    {
      id: 'hahahahahaha',
      word: 'kind',
      translation: 'child',
      derdie: 'das',
      family: 'people',
      createdAt: 0
    }
  ],
  filters: {
    family: 'people',
    sortBy: 'time',
    startDate: undefined,
    endDate: undefined
  }
};
