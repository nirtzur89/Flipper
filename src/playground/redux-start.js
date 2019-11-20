import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

//Notes reducer
const notesReducerDefaultState = [];
const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

//Store Creation
const store = createStore(
  combineReducers({
    notes: notesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

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
