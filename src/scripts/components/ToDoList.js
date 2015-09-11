import React from 'react';
import ToDoWrap from './ToDoWrap.js';
import StatusWrap from './StatusWrap.js';
import ItemWrap from './ItemWrap';




const styles = {
  wrap: {
    flex:'1',
    boxShadow: '3px 3px 3px #888888',
    backgroundColor:'white'
  }
};

const ToDoList = React.createClass({
  render() {
    return (


      <div style={styles.wrap}>
      <ToDoWrap />
      <ItemWrap />
      <StatusWrap />
      </div>
    )
  }
});

module.exports = ToDoList;
