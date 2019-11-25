import React from 'react';
import { connect } from 'react-redux';
import WordsListItem from './WordsListItem';
import { DateRangePicker } from 'react-dates';
import {
  setWordFilter,
  sortByDate,
  sortByWord,
  setEndDate,
  setStartDate
} from '../actions/filters';

class WordsListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  // onDatesChange = ({ startDate, endDate }) => {
  //   this.props.dispatch(setStartDate(startDate));
  //   this.props.dispatch(setEndDate(endDate));
  // };

  // onFocusChange = calendarFocused => {
  //   this.setState(() => ({ calendarFocused }));
  // };
  render() {
    return (
      <div>
        <h4>search word</h4>
        <input
          type='text'
          value={this.props.filters.family}
          onChange={e => {
            this.props.dispatch(setWordFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'word') {
              this.props.dispatch(sortByWord());
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='word'>Word</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(WordsListFilters);

// <DateRangePicker
//   startDate={this.props.filters.startDate}
//   endDate={this.props.filters.endDate}
//   onDatesChange={this.onDatesChange}
//   focusedInput={this.state.calendarFocused}
//   onFocusChange={this.onFocusChange}
// />;
