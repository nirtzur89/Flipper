import { createStore, combineReducers } from 'redux';
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';

//Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
