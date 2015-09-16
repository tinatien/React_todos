import React from 'react';
var TodoActions = require('../actions/TodoActions');
import InputBox from './InputBox';
import CheckAllButton from './CheckAllButton';
// import create from './TodoActions';
// import delete from './TodoActions';
const styles = {
  wrap: {
    display: 'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'50px',
    // boxShadow: '3px 3px 3px #888888',
    fontSize:'1em',

  }
};

const ToDoWrap = React.createClass({

  render() {
    return (
        // <div style={styles.wrap}>
        <div style={styles.wrap}>
          <CheckAllButton />
          <InputBox
            placeholder="What needs to be done?"
            onSave={this._onSave}
          />
        </div>
      );
    },
      // <div style={styles.wrap}>
      //   <CheckAllButton />
      //   <InputBox onSave={this._onSave} placeholder="What needs to be done ?" />
      // </div>
  _onSave: function(text) {
    if (text.trim()){
      TodoActions.create(text);
    }

  }

});

module.exports = ToDoWrap;
