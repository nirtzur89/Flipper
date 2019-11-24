//SORT_BY_FAMILY
export const setFamilyFilter = (family = '') => ({
  type: 'FAMILY_FILTER',
  family
});
//SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
//SORT_BY_FAMILYS
export const sortByFamily = () => ({
  type: 'SORT_BY_FAMILY'
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
