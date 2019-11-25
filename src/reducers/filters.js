import moment from 'moment';

//Filters reducer
const filtersReducerDefaultState = {
  word: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'WORD_FILTER':
      return {
        ...state,
        word: action.word
      };
    case 'SORT_BY_WORD':
      return {
        ...state,
        sortBy: 'word'
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
