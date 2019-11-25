import React from 'react';
import { connect } from 'react-redux';
import WordsListItem from './WordsListItem';
import { setWordFilter, sortByDate, sortByWord } from '../actions/filters';

const WordsListFilters = props => (
  <div>
    <h4>search word</h4>
    <input
      type='text'
      value={props.filters.family}
      onChange={e => {
        props.dispatch(setWordFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'word') {
          props.dispatch(sortByWord());
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='word'>Word</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(WordsListFilters);
