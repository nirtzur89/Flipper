//Filters reducer
const filtersReducerDefaultState = {
  family: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
export default (state = filtersReducerDefaultState, action) => {
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
