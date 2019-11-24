//get visible notes
export default (notes, { family, sortBy, startDate, endDate }) => {
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
