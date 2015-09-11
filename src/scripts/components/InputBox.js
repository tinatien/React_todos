import React from 'react';


const styles = {
  wrap: {


    flex:'3',
    fontSize:'1em',
    border:'2px gray none',
    outline:'none'
  }
};

const InputBox = React.createClass({
  render() {
    return (

      <input style={styles.wrap} placeholder="What needs to be done ?" />


    )
  }
});

module.exports = InputBox;
