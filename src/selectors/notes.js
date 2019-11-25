//get visible notes
export default (notes, { word, sortBy, startDate, endDate }) => {
  return notes
    .filter(note => {
      const startDateMatch =
        typeof startDate !== 'number' || note.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || note.createdAt <= endDate;
      const wordMatch = note.word.toLowerCase().includes(word.toLowerCase());

      return startDateMatch && endDateMatch && wordMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'word') {
        return a.word > b.word ? 1 : -1;
      }
    });
};
