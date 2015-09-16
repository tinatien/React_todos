import React from 'react';
import ToDoWrap from './ToDoWrap.js';
import StatusWrap from './StatusWrap.js';
import ItemWrap from './ItemWrap.js';
var TodoStore = require ('../stores/TodoStore');




const styles = {
  wrap: {
    flex:'1',
    boxShadow: '3px 3px 3px #888888',
    backgroundColor:'white'
  }
};

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

const ToDoList = React.createClass({
  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  // getInitialState(){
  //   return{
  //     todoList:TodoStore.getAll();
  //   }
  //
  // }
  render() {
    return (
      // <div style={styles.wrap}>
      <div style={styles.wrap}>
      <ToDoWrap />
      <ItemWrap  allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete}/>
      <StatusWrap allTodos={this.state.allTodos} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = ToDoList;
