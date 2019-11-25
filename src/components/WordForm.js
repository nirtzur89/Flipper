import React from 'react';
import moment from 'moment';

export default class WordForm extends React.Component {
  state = {
    word: '',
    translation: '',
    derdie: '',
    family: '',
    createdAt: moment(),
    error: ''
  };
  onWordChange = e => {
    const word = e.target.value;
    this.setState(() => ({ word }));
  };
  onTranslationChange = e => {
    const translation = e.target.value;
    this.setState(() => ({ translation }));
  };
  onFamilyChange = e => {
    const family = e.target.value;
    this.setState(() => ({ family }));
  };
  onDerdieChange = e => {
    const derdie = e.target.value;
    this.setState(() => ({ derdie }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.word || !this.state.translation) {
      this.setState(() => ({ error: 'Please provide word and translation' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        word: this.state.word,
        translation: this.state.translation,
        createdAt: this.state.createdAt.valueOf(),
        derdie: this.state.derdie,
        family: this.state.family
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='word'
            autoFocus
            value={this.state.description}
            onChange={this.onWordChange}
          ></input>
          <select value={this.state.derdie} onChange={this.onDerdieChange}>
            <option value='Der'>Der</option>
            <option value='Die'>Die</option>
            <option value='Das'>Das</option>
          </select>
          <input
            type='text'
            placeholder='translation'
            value={this.state.translation}
            onChange={this.onTranslationChange}
          ></input>
          <input
            type='text'
            placeholder='family'
            value={this.state.family}
            onChange={this.onFamilyChange}
          ></input>
          <button>Add Word</button>
        </form>
      </div>
    );
  }
}
