import React from 'react';

export default class WordForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='word' autoFocus></input>
          <select>
            <option value='Der'>Der</option>
            <option value='Die'>Die</option>
            <option value='Das'>Das</option>
          </select>
          <input type='text' placeholder='translation'></input>
          <input type='text' placeholder='family'></input>
        </form>
      </div>
    );
  }
}
