//SORT_BY_FAMILY
export const setWordFilter = (word = '') => ({
  type: 'WORD_FILTER',
  word
});
//SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
//SORT_BY_FAMILYS
export const sortByWord = () => ({
  type: 'SORT_BY_WORD'
});
//SET_START_DATE
export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});
//SET_END_DATE
export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
