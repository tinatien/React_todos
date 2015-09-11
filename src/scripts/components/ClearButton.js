import React from 'react';


const styles = {
  wrap: {

    flex:'2',
    height:'100%',
    color:'gray',
    backgroundColor:'white',
    border:'2px gray none',
    outline:'none',
    paddingLeft:'40px'



  }
};

const ClearButton = React.createClass({
  render() {
    return (
        <button style={styles.wrap}>Clear completed</button>
    )
  }
});

module.exports = ClearButton;
