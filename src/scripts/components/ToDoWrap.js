import React from 'react';
import InputBox from './InputBox';
import CheckAllButton from './CheckAllButton';


const styles = {
  wrap: {
    display: 'flex',
    backgroundColor:'#FFF',
    width: '600px',
    height:'50px',
    // boxShadow: '3px 3px 3px #888888',
    fontSize:'1em'

  }
};

const ToDoWrap = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <CheckAllButton />
        <InputBox />
      </div>
    )
  }
});

module.exports = ToDoWrap;
