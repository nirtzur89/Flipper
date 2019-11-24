import React from 'react';

const WordsListItem = ({ word, translation }) => (
  <div>
    <h4>{word}</h4>
    <p>{translation}</p>
  </div>
);

export default WordsListItem;
