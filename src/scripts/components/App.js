import React from 'react';
import  ToDoList from './ToDoList';

const styles = {
  wrap: {

    display:'flex',
  }
};



const App = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <ToDoList />
      </div>
    )
  }
});

module.exports = App;
