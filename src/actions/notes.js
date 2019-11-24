import uuid from 'uuid';

//ADD_NOTE
export const addNote = ({
  word = '',
  translation = '',
  derdie = '',
  family = '',
  createdAt = 0
} = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuid(),
    word,
    translation,
    derdie,
    family,
    createdAt
  }
});
//REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
});
//EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});
