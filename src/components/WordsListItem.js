import React from 'react';
import { Link } from 'react-router-dom';

const WordsListItem = ({ word, translation, family, id, dispatch }) => (
  <div>
    <Link to={`/words/${id}`}>
      <h4>{word}</h4>
    </Link>
    <p>
      meaning: {translation} - family: {family}
    </p>
  </div>
);

export default WordsListItem;
